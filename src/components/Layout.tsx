
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import WhatsAppButton from './WhatsAppButton';

type LayoutProps = {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
  whatsAppMessage?: string;
};

const Layout = ({ 
  children, 
  hideNavbar = false, 
  hideFooter = false,
  whatsAppMessage = "Ciao! Sono interessato a maggiori informazioni su Baglio Abbate." 
}: LayoutProps) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
      <WhatsAppButton message={whatsAppMessage} />
    </div>
  );
};

export default Layout;
