
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-baglio-ebano dark:bg-baglio-blu text-baglio-crema">
      <div className="baglio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-baglio-oro">Baglio Abbate</h3>
            <p className="mb-4 text-baglio-crema dark:text-baglio-grigio">
              Dove la Sicilia si fa esperienza: tradizione, sapori autentici e momenti indimenticabili.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-baglio-crema hover:text-baglio-oro transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-baglio-crema hover:text-baglio-oro transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@baglioabbate.it" className="text-baglio-crema hover:text-baglio-oro transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-baglio-oro">Orari</h3>
            <ul className="text-baglio-crema dark:text-baglio-grigio space-y-2">
              <li>Lunedì - Venerdì: 12:00 - 23:00</li>
              <li>Sabato: 12:00 - 24:00</li>
              <li>Domenica: 12:00 - 23:00</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-baglio-oro">Contatti</h3>
            <ul className="text-baglio-crema dark:text-baglio-grigio space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-baglio-oro" />
                Via Palermo 2, Balestrate (PA)
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-baglio-oro" />
                +39 091 123 4567
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-baglio-oro" />
                info@baglioabbate.it
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-baglio-oro">Link Rapidi</h3>
            <ul className="text-baglio-crema dark:text-baglio-grigio space-y-2">
              <li>
                <Link to="/" className="hover:text-baglio-oro transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/baglio-abbate" className="hover:text-baglio-oro transition-colors">Baglio Abbate</Link>
              </li>
              <li>
                <Link to="/ristorante" className="hover:text-baglio-oro transition-colors">Ristorante</Link>
              </li>
              <li>
                <Link to="/eventi" className="hover:text-baglio-oro transition-colors">Eventi</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-baglio-oro transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-baglio-oro transition-colors">Contatti</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-baglio-ebano/30 dark:border-baglio-grigio/20 py-6 text-sm text-baglio-grigio text-center">
          <p>© {new Date().getFullYear()} Baglio Abbate. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
