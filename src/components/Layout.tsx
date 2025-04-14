
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
};

const Layout = ({ children, hideNavbar = false, hideFooter = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
