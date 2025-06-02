
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Safe initial check for SSR
    if (typeof window === 'undefined') return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Throttle resize events for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', throttledResize, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return isMobile;
}
