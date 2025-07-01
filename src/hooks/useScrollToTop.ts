
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from './use-mobile';

export const useScrollToTop = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    // Scroll to top immediately on route change
    const scrollToTop = () => {
      if (isMobile) {
        // Instant scroll on mobile to prevent iOS bounce issues
        window.scrollTo(0, 0);
        // Also scroll any potential scrollable containers
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        // Smooth scroll on desktop
        window.scrollTo({ 
          top: 0, 
          left: 0, 
          behavior: 'auto' // Use 'auto' for immediate scroll, 'smooth' causes delays
        });
      }
    };

    // Use requestAnimationFrame for better performance
    const scrollTimeout = requestAnimationFrame(() => {
      scrollToTop();
    });

    return () => {
      cancelAnimationFrame(scrollTimeout);
    };
  }, [location.pathname, isMobile]);

  // Additional effect to handle any remaining scroll issues
  useEffect(() => {
    // Backup scroll reset after a short delay
    const backupScroll = setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(backupScroll);
  }, [location.pathname]);
};
