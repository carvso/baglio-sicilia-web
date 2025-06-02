
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200" 
            : "bg-black/30 backdrop-blur-sm"
        )}
      >
        <div className="baglio-container">
          <nav className="flex justify-between items-center py-4 min-h-[64px]">
            <Link 
              to="/" 
              className={cn(
                "font-playfair text-2xl font-bold tracking-wider relative z-50 transition-colors duration-300 drop-shadow-lg",
                isScrolled ? "text-elite-blue" : "text-white"
              )}
              onClick={handleLinkClick}
            >
              Baglio Abbate
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                <Link 
                  to="/eventi" 
                  className={cn(
                    "font-medium transition-colors duration-300 min-h-[44px] flex items-center drop-shadow-sm",
                    isScrolled 
                      ? "text-elite-blue hover:text-elite-gold" 
                      : "text-white hover:text-elite-gold"
                  )}
                  onClick={handleLinkClick}
                >
                  Eventi
                </Link>
                <Link 
                  to="/gallery" 
                  className={cn(
                    "font-medium transition-colors duration-300 min-h-[44px] flex items-center drop-shadow-sm",
                    isScrolled 
                      ? "text-elite-blue hover:text-elite-gold" 
                      : "text-white hover:text-elite-gold"
                  )}
                  onClick={handleLinkClick}
                >
                  Gallery
                </Link>
                <Link 
                  to="/contatti" 
                  className={cn(
                    "font-medium transition-colors duration-300 min-h-[44px] flex items-center drop-shadow-sm",
                    isScrolled 
                      ? "text-elite-blue hover:text-elite-gold" 
                      : "text-white hover:text-elite-gold"
                  )}
                  onClick={handleLinkClick}
                >
                  Contatti
                </Link>
              </div>
              
              <Link 
                to="/contatti" 
                className="py-3 px-6 bg-elite-gold text-white hover:bg-elite-goldLight rounded-md transition-all duration-300 font-semibold min-h-[44px] flex items-center shadow-lg hover:shadow-xl"
              >
                Prenota
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu} 
              className={cn(
                "md:hidden focus:outline-none p-2 min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors duration-300 drop-shadow-lg",
                isScrolled ? "text-elite-blue" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={toggleMenu}
        />
      )}
      
      <div 
        className={cn(
          "md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-xl transition-transform duration-300",
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="flex-grow flex flex-col space-y-8">
            <MobileNavLink to="/" onClick={handleLinkClick} isActive={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/eventi" onClick={handleLinkClick} isActive={location.pathname.startsWith("/eventi")}>
              Eventi
            </MobileNavLink>
            <MobileNavLink to="/gallery" onClick={handleLinkClick} isActive={location.pathname === "/gallery"}>
              Gallery
            </MobileNavLink>
            <MobileNavLink to="/contatti" onClick={handleLinkClick} isActive={location.pathname === "/contatti"}>
              Contatti
            </MobileNavLink>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              to="/contatti" 
              onClick={handleLinkClick}
              className="w-full inline-block text-center py-4 px-6 rounded-md bg-elite-gold text-white hover:bg-elite-goldLight transition-all duration-300 font-semibold"
            >
              Prenota Ora
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

type MobileNavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

const MobileNavLink = ({ to, children, onClick, isActive }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={cn(
      "text-xl font-medium transition-colors duration-300 min-h-[48px] flex items-center border-b border-gray-200 pb-3",
      isActive ? "text-elite-gold font-semibold" : "text-elite-blue hover:text-elite-gold"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
