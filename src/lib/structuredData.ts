// Dati strutturati Schema.org per Baglio Abbate
export const getStructuredData = (page: string) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Baglio Abbate",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Palermo 4",
      "addressLocality": "Balestrate",
      "addressRegion": "PA",
      "postalCode": "90041",
      "addressCountry": "IT"
    },
    "telephone": ["+39 331 8286888", "+39 371 584 4048"],
    "url": "https://baglioabbate.it",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.0495,
      "longitude": 13.0025
    },
    "openingHours": "Mo-Su 09:00-20:00",
    "priceRange": "€€"
  };

  switch (page) {
    case 'home':
      return {
        ...baseData,
        "description": "Location esclusiva per eventi e matrimoni a Balestrate, vicino Palermo, Sicilia occidentale.",
        "image": "https://baglioabbate.it/public/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Vista Mare", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Parcheggio", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Spazi Esterni", "value": true }
        ]
      };

    case 'eventi':
      return {
        ...baseData,
        "name": "Baglio Abbate - Eventi e Matrimoni",
        "description": "Location per eventi e matrimoni a Balestrate, vicino Palermo.",
        "image": "https://baglioabbate.it/public/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png",
        "url": "https://baglioabbate.it/eventi",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Matrimoni", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Eventi Privati", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Eventi Aziendali", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Vista Mare", "value": true }
        ]
      };

    case 'gallery':
      return {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Gallery Baglio Abbate - Location Eventi Balestrate",
        "description": "Foto degli spazi interni ed esterni del Baglio Abbate a Balestrate.",
        "url": "https://baglioabbate.it/gallery",
        "image": [
          "https://baglioabbate.it/public/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png",
          "https://baglioabbate.it/public/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png"
        ],
        "location": {
          "@type": "Place",
          "name": "Baglio Abbate",
          "address": baseData.address
        }
      };

    case 'contatti':
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contatti Baglio Abbate",
        "description": "Contatta Baglio Abbate per informazioni su eventi e matrimoni a Balestrate.",
        "url": "https://baglioabbate.it/contatti",
        "mainEntity": {
          "@type": "Organization",
          "name": "Baglio Abbate",
          "address": baseData.address,
          "telephone": baseData.telephone,
          "email": "info@baglioabbate.it",
          "url": "https://baglioabbate.it",
          "openingHours": "Mo-Fr 12:00-23:00, Sa 12:00-24:00, Su 12:00-23:00",
          "sameAs": ["https://instagram.com/baglioabbateevents"]
        }
      };

    case 'matrimoni':
      return {
        ...baseData,
        "name": "Baglio Abbate - Location Matrimoni",
        "description": "Location esclusiva per matrimoni e cerimonie a Balestrate, vicino Palermo.",
        "image": "https://baglioabbate.it/public/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png",
        "url": "https://baglioabbate.it/matrimoni",
        "priceRange": "€€€",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Cerimonia Simbolica", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Allestimenti Floreali", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Servizio Fotografico", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Suite Nuziale", "value": true }
        ],
        "offers": {
          "@type": "Offer",
          "name": "Pacchetto Matrimonio Base",
          "price": "2500",
          "priceCurrency": "EUR",
          "description": "Location per cerimonia e ricevimento con allestimento base"
        }
      };

    case 'eventi-privati':
      return {
        ...baseData,
        "name": "Baglio Abbate - Eventi Privati",
        "description": "Location per eventi privati e celebrazioni a Balestrate, vicino Palermo.",
        "image": "https://baglioabbate.it/public/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png",
        "url": "https://baglioabbate.it/eventi-privati",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Fino a 150 ospiti", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Parcheggio Riservato", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Impianto Audio", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Servizi Fotografici", "value": true }
        ],
        "offers": {
          "@type": "Offer",
          "name": "Pacchetto Eventi Privati Base",
          "price": "800",
          "priceCurrency": "EUR",
          "description": "Location esclusiva per 4 ore con drink di benvenuto"
        }
      };

    case 'eventi-aziendali':
      return {
        ...baseData,
        "name": "Baglio Abbate - Eventi Aziendali",
        "description": "Location per eventi aziendali e business a Balestrate, vicino Palermo.",
        "image": "https://baglioabbate.it/public/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png",
        "url": "https://baglioabbate.it/eventi-aziendali",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Wi-Fi ad alta velocità", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Sale Meeting", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Attrezzature A/V", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Catering Business", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Parcheggio Riservato", "value": true }
        ],
        "offers": {
          "@type": "Offer",
          "name": "Pacchetto Eventi Aziendali Base",
          "price": "600",
          "priceCurrency": "EUR",
          "description": "Sala meeting fino a 50 persone con Wi-Fi e coffee break"
        }
      };

    default:
      return baseData;
  }
}; 