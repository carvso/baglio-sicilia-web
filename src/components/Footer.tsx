
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-elite-darker text-foreground heritage-pattern">
      <div className="baglio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div>
            {/* Sostituito il titolo con il logo */}
            <img
              src="/logo_baglio_black.svg"
              alt="Logo Baglio Abbate Events"
              style={{ height: "60px", width: "auto", marginBottom: "1rem" }}
            />
            <p className="mb-4 text-muted-foreground">
              Dove la Sicilia si fa esperienza: tradizione, sapori autentici e momenti indimenticabili.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/baglioabbateevents" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-elite-goldLight transition-colors">
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
                <Phone size={18} className="mr-2 text-elite-gold" />
                +39 331 828 6888
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-elite-gold" />
                +39 371 584 4048
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-elite-gold" />
                info@baglioabbate.it
              </li>
              <li className="flex items-center">
                <Instagram size={18} className="mr-2 text-elite-gold" />
                <a href="https://instagram.com/baglioabbateevents" target="_blank" rel="noopener noreferrer" className="underline hover:text-elite-goldLight">Instagram</a>
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
          <p>
            © {new Date().getFullYear()} Medusa S.r.l. - P.IVA 07167250823. Tutti i diritti riservati. |
            <Link to="/privacy-policy" className="underline hover:text-elite-goldLight mx-1">Privacy Policy</Link>|
            <Link to="/termini-e-condizioni" className="underline hover:text-elite-goldLight mx-1">Termini e Condizioni</Link>|
            <Link to="/cookie-policy" className="underline hover:text-elite-goldLight mx-1">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
