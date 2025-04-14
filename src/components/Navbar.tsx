
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
      }`}
    >
      <div className="baglio-container">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="font-playfair text-2xl font-bold tracking-wider">
            Baglio Abbate
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/chi-siamo" isScrolled={isScrolled}>Chi Siamo</NavLink>
            <NavLink to="/ristorante" isScrolled={isScrolled}>Ristorante & Lounge</NavLink>
            <NavLink to="/eventi" isScrolled={isScrolled}>Eventi</NavLink>
            <NavLink to="/gallery" isScrolled={isScrolled}>Gallery</NavLink>
            <NavLink to="/contatti" isScrolled={isScrolled}>Contatti</NavLink>
            <Link 
              to="/contatti" 
              className={`ml-4 py-2 px-4 border ${
                isScrolled 
                  ? 'border-baglio-terracotta text-baglio-terracotta hover:bg-baglio-terracotta hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-baglio-terracotta'
              } transition duration-300 rounded-sm`}
            >
              Prenota
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/chi-siamo" onClick={toggleMenu}>Chi Siamo</MobileNavLink>
          <MobileNavLink to="/ristorante" onClick={toggleMenu}>Ristorante & Lounge</MobileNavLink>
          <MobileNavLink to="/eventi" onClick={toggleMenu}>Eventi</MobileNavLink>
          <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
          <MobileNavLink to="/contatti" onClick={toggleMenu}>Contatti</MobileNavLink>
          <Link 
            to="/contatti" 
            onClick={toggleMenu}
            className="py-2 px-6 border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-sm mt-4"
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
};

const NavLink = ({ to, children, isScrolled }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`font-medium transition-colors duration-300 hover:text-baglio-terracotta ${
      isScrolled ? 'text-gray-800' : 'text-white'
    }`}
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
    className="text-white text-2xl font-playfair hover:text-baglio-terracotta transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
