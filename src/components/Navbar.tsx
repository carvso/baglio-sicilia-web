import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import PaletteToggle from './PaletteToggle';
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
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 dark:bg-baglio-ebano/95 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="baglio-container">
        <nav className="flex justify-between items-center py-4 px-4 md:px-0">
          <Link to="/" className="font-playfair text-2xl font-bold tracking-wider relative z-50 text-baglio-ebano dark:text-white">
            Baglio Abbate
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" isActive={location.pathname === "/"} isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/baglio-abbate" isActive={location.pathname === "/baglio-abbate"} isScrolled={isScrolled}>Baglio Abbate</NavLink>
            <NavLink to="/ristorante" isActive={location.pathname === "/ristorante"} isScrolled={isScrolled}>Ristorante</NavLink>
            <NavLink to="/eventi" isActive={location.pathname === "/eventi"} isScrolled={isScrolled}>Eventi</NavLink>
            <NavLink to="/gallery" isActive={location.pathname === "/gallery"} isScrolled={isScrolled}>Gallery</NavLink>
            <NavLink to="/contatti" isActive={location.pathname === "/contatti"} isScrolled={isScrolled}>Contatti</NavLink>
            
            {/* Theme & Palette Toggles */}
            <div className="flex items-center gap-2">
              <PaletteToggle />
              <ThemeToggle className="ml-2" />
            </div>
            
            <Link 
              to="/contatti" 
              className={cn(
                "ml-4 py-2 px-4 border rounded-md transition duration-300",
                isScrolled 
                  ? 'border-baglio-oro text-baglio-oro hover:bg-baglio-oro hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-baglio-oro'
              )}
            >
              Prenota
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 z-50">
            <div className="flex items-center gap-2">
              <PaletteToggle />
              <ThemeToggle />
            </div>
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className={cn(
                  "transition-colors",
                  isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
                )} />
              ) : (
                <Menu size={24} className={cn(
                  "transition-colors",
                  isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
                )} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Fixed position instead of absolute */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-baglio-ebano/95 dark:bg-baglio-blu/95 z-40 backdrop-blur-md transition-transform duration-300",
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4 pt-20">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/baglio-abbate" onClick={toggleMenu}>Baglio Abbate</MobileNavLink>
          <MobileNavLink to="/ristorante" onClick={toggleMenu}>Ristorante</MobileNavLink>
          <MobileNavLink to="/eventi" onClick={toggleMenu}>Eventi</MobileNavLink>
          <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
          <MobileNavLink to="/contatti" onClick={toggleMenu}>Contatti</MobileNavLink>
          <Link 
            to="/contatti" 
            onClick={toggleMenu}
            className="py-2 px-6 border-2 border-baglio-oro text-white hover:bg-baglio-oro hover:text-white transition duration-300 rounded-md mt-4"
          >
            Prenota
          </Link>
        </div>
      </div>
    </header>
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
      `font-medium transition-colors duration-300 hover:text-baglio-oro`,
      {
        'text-gray-800 dark:text-baglio-crema': isScrolled && !isActive,
        'text-white': !isScrolled && !isActive,
        'text-baglio-oro font-semibold': isActive,
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
    className="text-white text-2xl font-playfair hover:text-baglio-oro transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
