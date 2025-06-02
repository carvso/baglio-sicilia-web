
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Il tuo nome completo"
            className="w-full px-4 py-3 bg-elite-darker border border-elite-goldLight/30 rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-elite-gold focus:border-elite-gold transition-all duration-200"
            aria-describedby="name-help"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="la-tua-email@esempio.it"
            className="w-full px-4 py-3 bg-elite-darker border border-elite-goldLight/30 rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-elite-gold focus:border-elite-gold transition-all duration-200"
            aria-describedby="email-help"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+39 333 123 4567"
            className="w-full px-4 py-3 bg-elite-darker border border-elite-goldLight/30 rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-elite-gold focus:border-elite-gold transition-all duration-200"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Oggetto *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-elite-darker border border-elite-goldLight/30 rounded-md text-foreground focus:ring-2 focus:ring-elite-gold focus:border-elite-gold transition-all duration-200"
            aria-describedby="subject-help"
          >
            <option value="">Seleziona l'argomento...</option>
            <option value="Matrimonio">Matrimonio</option>
            <option value="Eventi Aziendali">Eventi Aziendali</option>
            <option value="Feste Private">Feste Private</option>
            <option value="Informazioni Generali">Informazioni Generali</option>
            <option value="Altro">Altro</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Descrivici il tuo evento da sogno..."
          className="w-full px-4 py-3 bg-elite-darker border border-elite-goldLight/30 rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-elite-gold focus:border-elite-gold transition-all duration-200 resize-none"
          aria-describedby="message-help"
        ></textarea>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-elite-gold hover:bg-elite-goldLight disabled:opacity-70 disabled:cursor-not-allowed text-elite-darker font-bold py-3 px-8 rounded-md transition-all duration-200 focus:ring-2 focus:ring-elite-gold focus:ring-offset-2 focus:ring-offset-background flex items-center"
          aria-describedby="submit-help"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-elite-darker" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Invio in corso...
            </>
          ) : (
            'Invia Richiesta'
          )}
        </button>
        
        {submitSuccess && (
          <div className="text-green-400 font-medium" role="alert">
            ✓ Messaggio inviato con successo!
          </div>
        )}
      </div>
      
      <p className="text-xs text-muted-foreground">
        * Campi obbligatori. I tuoi dati saranno trattati nel rispetto della privacy.
      </p>
    </form>
  );
};

export default ContactForm;
