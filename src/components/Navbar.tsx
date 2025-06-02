
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu when changing routes
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <nav className="flex justify-between items-center py-4 px-4 md:px-0">
            <Link to="/" className="font-playfair text-2xl font-bold tracking-wider relative z-50 text-elite-gold">
              Baglio Abbate
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <NavLink to="/" isActive={location.pathname === "/"} isScrolled={isScrolled}>Home</NavLink>
              <NavLink to="/eventi" isActive={location.pathname === "/eventi"} isScrolled={isScrolled}>Eventi</NavLink>
              <NavLink to="/gallery" isActive={location.pathname === "/gallery"} isScrolled={isScrolled}>Gallery</NavLink>
              <NavLink to="/contatti" isActive={location.pathname === "/contatti"} isScrolled={isScrolled}>Contatti</NavLink>
              
              {/* Language Selector */}
              <LanguageSelector className="ml-4" isScrolled={isScrolled} />
              
              <Link 
                to="/contatti" 
                className="ml-4 py-2 px-4 bg-elite-gold text-elite-darker hover:bg-elite-goldLight rounded-md transition duration-300 font-semibold"
              >
                Prenota
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4 z-50">
              <LanguageSelector isScrolled={isScrolled} />
              <button 
                onClick={toggleMenu} 
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-foreground" />
                ) : (
                  <Menu size={24} className="text-foreground" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 fade-in"
          onClick={toggleMenu}
          aria-hidden="true"
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        />
      )}
      
      {/* Mobile Menu - Content */}
      <div 
        className={cn(
          "md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-elite-darker/95 z-40 backdrop-blur-md shadow-xl transition-transform duration-300 overflow-y-auto",
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ 
          height: '100vh',
          top: 0,
          position: 'fixed'
        }}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="flex-grow flex flex-col space-y-6">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/eventi" onClick={toggleMenu}>Eventi</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/contatti" onClick={toggleMenu}>Contatti</MobileNavLink>
          </div>
          <div className="mt-8 pt-6 border-t border-elite-gold/20">
            <Link 
              to="/contatti" 
              onClick={toggleMenu}
              className="w-full inline-block text-center py-3 px-6 rounded-md bg-elite-gold text-elite-darker hover:bg-elite-goldLight transition duration-300 font-semibold"
            >
              Prenota Ora
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  isScrolled: boolean;
  isActive: boolean;
};

const NavLink = ({ to, children, isScrolled, isActive }: NavLinkProps) => (
  <Link 
    to={to} 
    className={cn(
      `font-medium transition-colors duration-300`,
      {
        'text-foreground hover:text-elite-goldLight': !isActive,
        'text-elite-gold font-semibold': isActive,
      }
    )}
  >
    {children}
  </Link>
);

type MobileNavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
};

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-foreground text-2xl font-playfair hover:text-elite-goldLight transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
