
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
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
    // Navigation feedback
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 300);
    return () => clearTimeout(timer);
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
    // Add subtle navigation feedback
    setIsNavigating(true);
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-baglio-cremaIntonacata/98 backdrop-blur-md shadow-lg border-b border-baglio-oro/20" 
            : "bg-baglio-ebanoIntenso/30 backdrop-blur-sm",
          isNavigating && "opacity-95"
        )}
      >
        {/* Subtle loading bar for navigation feedback */}
        {isNavigating && (
          <div className="absolute top-0 left-0 w-full h-0.5 bg-baglio-oro/30">
            <div className="h-full bg-baglio-oro animate-pulse" />
          </div>
        )}
        
        <div className="baglio-container">
          <nav className="flex justify-between items-center py-6 min-h-[88px] relative">
            
            {/* Left Navigation - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
              <Link 
                to="/chi-siamo" 
                className={cn(
                  "font-medium transition-all duration-300 min-h-[44px] flex items-center drop-shadow-sm relative group",
                  isScrolled 
                    ? "text-baglio-ebanoIntenso hover:text-baglio-oro" 
                    : "text-baglio-cremaIntonacata hover:text-baglio-oro",
                  location.pathname === "/chi-siamo" && "text-baglio-oro font-semibold"
                )}
                onClick={handleLinkClick}
              >
                Chi Siamo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-baglio-oro transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/eventi" 
                className={cn(
                  "font-medium transition-all duration-300 min-h-[44px] flex items-center drop-shadow-sm relative group",
                  isScrolled 
                    ? "text-baglio-ebanoIntenso hover:text-baglio-oro" 
                    : "text-baglio-cremaIntonacata hover:text-baglio-oro",
                  location.pathname.startsWith("/eventi") && "text-baglio-oro font-semibold"
                )}
                onClick={handleLinkClick}
              >
                Eventi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-baglio-oro transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Center Logo */}
            <Link 
              to="/" 
              className={cn(
                "absolute left-1/2 transform -translate-x-1/2 font-playfair text-2xl font-bold tracking-wider z-50 transition-all duration-300 drop-shadow-lg hover:scale-105",
                isScrolled ? "text-baglio-ebanoIntenso" : "text-baglio-cremaIntonacata"
              )}
              onClick={handleLinkClick}
            >
              <img
                src="/logo_baglio_black.svg"
                alt="Logo Baglio Abbate Events"
                style={{ height: isMobile ? "55px" : "80px", width: "auto", maxWidth: "320px", transition: "all 0.3s ease" }}
                className="block filter drop-shadow-lg"
              />
            </Link>

            {/* Right Navigation - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
              <Link 
                to="/gallery" 
                className={cn(
                  "font-medium transition-all duration-300 min-h-[44px] flex items-center drop-shadow-sm relative group",
                  isScrolled 
                    ? "text-baglio-ebanoIntenso hover:text-baglio-oro" 
                    : "text-baglio-cremaIntonacata hover:text-baglio-oro",
                  location.pathname === "/gallery" && "text-baglio-oro font-semibold"
                )}
                onClick={handleLinkClick}
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-baglio-oro transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/contatti" 
                className={cn(
                  "font-medium transition-all duration-300 min-h-[44px] flex items-center drop-shadow-sm relative group",
                  isScrolled 
                    ? "text-baglio-ebanoIntenso hover:text-baglio-oro" 
                    : "text-baglio-cremaIntonacata hover:text-baglio-oro",
                  location.pathname === "/contatti" && "text-baglio-oro font-semibold"
                )}
                onClick={handleLinkClick}
              >
                Contatti
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-baglio-oro transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <a 
                href="https://wa.me/393318286888"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "py-3 px-6 rounded-full transition-all duration-300 font-semibold min-h-[44px] flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm border",
                  isScrolled 
                    ? "bg-baglio-oro/90 text-baglio-ebanoIntenso hover:bg-baglio-oro border-baglio-oro/30" 
                    : "bg-baglio-oro/20 text-baglio-cremaIntonacata hover:bg-baglio-oro hover:text-baglio-ebanoIntenso border-baglio-oro/40"
                )}
              >
                Prenota
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu} 
              className={cn(
                "lg:hidden focus:outline-none p-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-all duration-300 drop-shadow-lg rounded-full backdrop-blur-sm border border-current/20 hover:scale-110",
                isScrolled ? "text-baglio-ebanoIntenso" : "text-baglio-cremaIntonacata"
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
          className="md:hidden fixed inset-0 bg-baglio-ebanoIntenso/60 z-40"
          onClick={toggleMenu}
        />
      )}
      
      <div 
        className={cn(
          "md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-baglio-cremaIntonacata z-50 shadow-xl transition-transform duration-300",
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="flex-grow flex flex-col space-y-8">
            <MobileNavLink to="/" onClick={handleLinkClick} isActive={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/chi-siamo" onClick={handleLinkClick} isActive={location.pathname === "/chi-siamo"}>
              Chi Siamo
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
          <div className="mt-8 pt-6 border-t border-baglio-oro/30">
            <Link 
              to="/contatti" 
              onClick={handleLinkClick}
              className="w-full inline-block text-center py-4 px-6 rounded-md bg-baglio-oro text-baglio-ebanoIntenso hover:bg-baglio-oroImperiale transition-all duration-300 font-semibold"
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
      "text-xl font-medium transition-colors duration-300 min-h-[48px] flex items-center border-b border-baglio-oro/20 pb-3",
      isActive ? "text-baglio-oro font-semibold" : "text-baglio-ebanoIntenso hover:text-baglio-oro"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
