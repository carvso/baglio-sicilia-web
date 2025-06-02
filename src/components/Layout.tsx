
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BreadcrumbNavigation from './BreadcrumbNavigation';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import WhatsAppButton from './WhatsAppButton';

type LayoutProps = {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
  hideSecondaryNav?: boolean;
  hideBreadcrumb?: boolean;
  whatsAppMessage?: string;
};

const Layout = ({ 
  children, 
  hideNavbar = false, 
  hideFooter = false,
  hideSecondaryNav = false,
  hideBreadcrumb = false,
  whatsAppMessage = "Ciao! Sono interessato a maggiori informazioni su Baglio Abbate." 
}: LayoutProps) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Smooth scroll to top on page load, optimized for mobile
    const scrollToTop = () => {
      if (isMobile) {
        // Instant scroll on mobile to prevent iOS bounce issues
        window.scrollTo(0, 0);
      } else {
        // Smooth scroll on desktop
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Use requestAnimationFrame for better performance
    requestAnimationFrame(scrollToTop);
  }, [isMobile]);

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      {!hideNavbar && <Navbar />}
      {!hideBreadcrumb && <BreadcrumbNavigation />}
      <main 
        className="flex-grow"
        style={{
          // Mobile optimizations
          minHeight: '100vh',
          // Prevent horizontal scroll on mobile
          overflowX: 'hidden',
          // iOS momentum scrolling
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      {!hideFooter && <Footer />}
      <WhatsAppButton message={whatsAppMessage} />
    </div>
  );
};

export default Layout;
