
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-elite-darker text-foreground heritage-pattern">
      <div className="baglio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-elite-gold">Baglio Abbate</h3>
            <p className="mb-4 text-muted-foreground">
              Dove la Sicilia si fa esperienza: tradizione, sapori autentici e momenti indimenticabili.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-elite-goldLight transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-elite-goldLight transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@baglioabbate.it" className="text-foreground hover:text-elite-goldLight transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-elite-gold">Orari</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>Lunedì - Venerdì: 12:00 - 23:00</li>
              <li>Sabato: 12:00 - 24:00</li>
              <li>Domenica: 12:00 - 23:00</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-elite-gold">Contatti</h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-elite-gold" />
                Via Palermo 2, Balestrate (PA)
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-elite-gold" />
                +39 091 123 4567
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-elite-gold" />
                info@baglioabbate.it
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-elite-gold">Link Rapidi</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link to="/" className="hover:text-elite-goldLight transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/eventi" className="hover:text-elite-goldLight transition-colors">Eventi</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-elite-goldLight transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-elite-goldLight transition-colors">Contatti</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-elite-gold/20 py-6 text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} Baglio Abbate. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
