
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BreadcrumbNavigation from './BreadcrumbNavigation';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import WhatsAppButton from './WhatsAppButton';

type LayoutProps = {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
  hideSecondaryNav?: boolean;
  hideBreadcrumb?: boolean;
  whatsAppMessage?: string;
  heroLayout?: boolean; // New prop for hero pages
};

const Layout = ({ 
  children, 
  hideNavbar = false, 
  hideFooter = false,
  hideSecondaryNav = false,
  hideBreadcrumb = false,
  whatsAppMessage = "Ciao! Sono interessato a maggiori informazioni su Baglio Abbate.",
  heroLayout = false 
}: LayoutProps) => {
  const isMobile = useIsMobile();
  
  // Use our custom scroll to top hook
  useScrollToTop();

  useEffect(() => {
    // Set CSS custom property for navbar height
    document.documentElement.style.setProperty('--navbar-height', '64px');
    
    // Additional mobile optimizations
    if (isMobile) {
      // Prevent rubber band scrolling on iOS
      document.body.style.overscrollBehavior = 'none';
      // Ensure smooth scrolling is disabled on mobile for instant navigation
      document.documentElement.style.scrollBehavior = 'auto';
    } else {
      // Enable smooth scrolling for desktop
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    return () => {
      // Cleanup
      document.body.style.overscrollBehavior = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, [isMobile]);

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      {!hideNavbar && <Navbar />}
      {!hideBreadcrumb && <BreadcrumbNavigation />}
      <main 
        className={`flex-grow ${!hideNavbar && !heroLayout ? 'pt-16' : ''}`}
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
