
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
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
    // Close the mobile menu when changing routes
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
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
            ? "navbar-scrolled" 
            : "navbar-transparent"
        )}
      >
        <div className="baglio-container">
          <nav className="flex justify-between items-center py-3 md:py-4 px-4 md:px-0 min-h-[56px] md:min-h-[64px]">
            <Link 
              to="/" 
              className="font-playfair text-xl md:text-2xl font-bold tracking-wider relative z-50 text-elite-gold min-h-[44px] flex items-center"
              onClick={handleLinkClick}
            >
              Baglio Abbate
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-6">
                <Link 
                  to="/eventi" 
                  className="text-foreground hover:text-elite-goldLight transition duration-300 font-medium min-h-[44px] flex items-center"
                  onClick={handleLinkClick}
                >
                  Eventi
                </Link>
                <Link 
                  to="/gallery" 
                  className="text-foreground hover:text-elite-goldLight transition duration-300 font-medium min-h-[44px] flex items-center"
                  onClick={handleLinkClick}
                >
                  Gallery
                </Link>
                <Link 
                  to="/contatti" 
                  className="text-foreground hover:text-elite-goldLight transition duration-300 font-medium min-h-[44px] flex items-center"
                  onClick={handleLinkClick}
                >
                  Contatti
                </Link>
              </div>
              
              {/* Language Selector */}
              <LanguageSelector isScrolled={isScrolled} />
              
              <Link 
                to="/contatti" 
                className="py-2 md:py-3 px-4 md:px-6 bg-elite-gold text-elite-darker hover:bg-elite-goldLight rounded-md transition duration-300 font-semibold min-h-[40px] md:min-h-[44px] flex items-center text-sm md:text-base"
              >
                Prenota
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2 md:space-x-4 z-50">
              <LanguageSelector isScrolled={isScrolled} />
              <button 
                onClick={toggleMenu} 
                className="focus:outline-none focus:ring-2 focus:ring-elite-gold focus:ring-offset-2 focus:ring-offset-background rounded-md p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X size={20} className="text-foreground" />
                ) : (
                  <Menu size={20} className="text-foreground" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 mobile-nav-overlay"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile Menu - Content */}
      <div 
        className={cn(
          "md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-elite-darker/98 z-40 backdrop-blur-md shadow-xl transition-transform duration-300 overflow-y-auto",
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-16 pb-8 px-6">
          <div className="flex-grow flex flex-col space-y-6">
            <MobileNavLink to="/" onClick={handleLinkClick} isActive={location.pathname === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/eventi" onClick={handleLinkClick} isActive={location.pathname.startsWith("/eventi")}>Eventi</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={handleLinkClick} isActive={location.pathname === "/gallery"}>Gallery</MobileNavLink>
            <MobileNavLink to="/contatti" onClick={handleLinkClick} isActive={location.pathname === "/contatti"}>Contatti</MobileNavLink>
          </div>
          <div className="mt-6 pt-6 border-t border-elite-gold/20">
            <Link 
              to="/contatti" 
              onClick={handleLinkClick}
              className="w-full inline-block text-center py-4 px-6 rounded-md bg-elite-gold text-elite-darker hover:bg-elite-goldLight transition duration-300 font-semibold min-h-[56px] flex items-center justify-center"
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
      "text-xl font-playfair hover:text-elite-goldLight transition duration-300 min-h-[48px] flex items-center border-b border-elite-gold/20 pb-3",
      {
        'text-foreground': !isActive,
        'text-elite-gold font-semibold': isActive,
      }
    )}
  >
    {children}
  </Link>
);

export default Navbar;
