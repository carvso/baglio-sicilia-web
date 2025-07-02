
import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const SocialMediaBanners = () => {
  const socialItems = [
    {
      id: 'instagram',
      title: 'Seguici su Instagram',
      description: '@baglioabbate - Le foto più belle del nostro Baglio',
      icon: Instagram,
      link: 'https://instagram.com/baglioabbate',
      color: 'from-baglio-oro to-baglio-oroImperiale',
      bgImage: '/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png'
    },
    {
      id: 'contact',
      title: 'Contattaci Subito',
      description: 'Chiamaci o scrivici per organizzare il tuo evento',
      icon: Phone,
      link: '/contatti',
      color: 'from-baglio-oro to-baglio-oroImperiale',
      bgImage: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png'
    }
  ];

  return (
    <section className="py-16 bg-baglio-ebano">
      <div className="baglio-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-baglio-cremaIntonacata">
            Resta sempre aggiornato
          </h2>
          <p className="text-lg text-baglio-cremaIntonacata/80 max-w-2xl mx-auto">
            Seguici sui social e non perdere le novità del Baglio Abbate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialItems.map((item) => {
            const IconComponent = item.icon;
            const isExternal = item.link.startsWith('http');
            
            const content = (
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-baglio-oro/30 hover:border-baglio-oro h-32">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.bgImage}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-baglio-ebanoIntenso/90 to-baglio-ebano/70"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center p-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} mr-4 flex-shrink-0`}>
                    <IconComponent size={24} className="text-baglio-ebano" />
                  </div>
                  <div>
                    <h3 className="text-white font-playfair font-bold text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-baglio-cremaIntonacata/90 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-baglio-oro/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );

            if (isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <a key={item.id} href={item.link} className="block">
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaBanners;
