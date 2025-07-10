import React from 'react';

const TermsAndConditions = () => (
  <div className="baglio-container py-16 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-baglio-oro font-playfair">Termini e Condizioni di Utilizzo</h1>
    <p className="mb-2 text-sm text-muted-foreground">Ultimo aggiornamento: luglio 2025</p>
    <p className="mb-4">L’accesso e l’utilizzo del sito www.baglioabbate.it (di seguito "il Sito") implicano l’accettazione integrale dei presenti Termini e Condizioni da parte dell’utente. Se non intende accettarli, l’utente è invitato a non utilizzare il Sito.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Titolare del sito</h2>
    <p className="mb-4">
      Il Sito è gestito da:<br />
      <strong>Medusa S.r.l.</strong><br />
      Via Palermo 4, 90041 Balestrate (PA)<br />
      P. IVA 07167250823<br />
      Email: <a href="mailto:info@baglioabbate.it" className="underline">info@baglioabbate.it</a><br />
      Telefono: +39 331 828 6888
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">2. Proprietà intellettuale</h2>
    <p className="mb-4">Tutti i contenuti presenti sul Sito – compresi testi, immagini, fotografie, grafica, logo, video, design, layout, codice sorgente – sono di proprietà esclusiva di Medusa S.r.l. o concessi in licenza dai rispettivi titolari, e sono protetti dalla normativa vigente in materia di proprietà intellettuale e industriale.</p>
    <p className="mb-4">È vietata qualsiasi riproduzione, modifica, distribuzione, pubblicazione o utilizzo non autorizzato, salvo previa autorizzazione scritta del titolare dei diritti.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Utilizzo del sito</h2>
    <p className="mb-2">L’utente si impegna a utilizzare il Sito nel rispetto delle leggi vigenti, dell’ordine pubblico e della buona fede, evitando qualsiasi utilizzo illecito o lesivo dei diritti di terzi o del Titolare.</p>
    <p className="mb-2">È vietato:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Inserire dati falsi o non pertinenti nei moduli di contatto o prenotazione.</li>
      <li>Tentare di accedere ad aree riservate del sito senza autorizzazione.</li>
      <li>Utilizzare il sito per finalità di spam, phishing o diffusione di malware.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Limitazione di responsabilità</h2>
    <p className="mb-4">Medusa S.r.l. si impegna a mantenere il sito aggiornato, sicuro e accessibile, ma non garantisce l’assenza di errori, interruzioni o contenuti inesatti.</p>
    <p className="mb-2">Non potrà essere ritenuta responsabile per:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Malfunzionamenti tecnici del sito o dei servizi di terze parti integrati (es. Google Maps, moduli di contatto, sistemi di prenotazione).</li>
      <li>Danni diretti o indiretti derivanti dall’uso o dall’impossibilità di utilizzo del sito.</li>
      <li>Dati errati forniti dagli utenti.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Link a siti esterni</h2>
    <p className="mb-4">Il Sito può contenere link a siti web di terze parti. Medusa S.r.l. non è responsabile per i contenuti o la privacy policy di tali siti esterni.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">6. Modifiche ai termini</h2>
    <p className="mb-4">Medusa S.r.l. si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento, pubblicando la nuova versione aggiornata su questa pagina. L’uso continuato del sito dopo le modifiche costituisce accettazione delle stesse.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">7. Legge applicabile e foro competente</h2>
    <p className="mb-4">I presenti Termini e Condizioni sono regolati dalla legge italiana.<br />
    Per qualsiasi controversia derivante dall’uso del sito o dall’interpretazione delle presenti condizioni, è competente in via esclusiva il Foro di Palermo.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contatti</h2>
    <p>Per domande o chiarimenti relativi a questi Termini e Condizioni, puoi contattarci a:<br />
      <span className="inline-block mt-2">📧 <a href="mailto:info@baglioabbate.it" className="underline">info@baglioabbate.it</a></span><br />
      <span className="inline-block">📞 +39 331 828 6888</span>
    </p>
  </div>
);

export default TermsAndConditions; 