
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

type LayoutProps = {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
};

const Layout = ({ children, hideNavbar = false, hideFooter = false }: LayoutProps) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-baglio-lightpink ${isMobile ? 'mobile-layout' : ''}`}>
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
