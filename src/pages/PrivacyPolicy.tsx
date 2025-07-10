import React from 'react';

const PrivacyPolicy = () => (
  <div className="baglio-container py-16 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-baglio-oro font-playfair">Privacy Policy</h1>
    <p className="mb-2 text-sm text-muted-foreground">Ultimo aggiornamento: luglio 2025</p>
    <p className="mb-4">La presente informativa è resa ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR) e descrive le modalità di gestione del sito www.baglioabbate.it in riferimento al trattamento dei dati personali degli utenti che lo consultano.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Titolare del trattamento</h2>
    <p className="mb-4">
      <strong>Medusa S.r.l.</strong><br />
      Via Palermo 4, 90041 Balestrate (PA)<br />
      P. IVA: 07167250823<br />
      Email: <a href="mailto:info@baglioabbate.it" className="underline">info@baglioabbate.it</a><br />
      Tel: +39 331 828 6888
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">2. Tipologia di dati raccolti</h2>
    <ul className="list-disc ml-6 mb-4">
      <li><strong>Dati di navigazione:</strong> indirizzi IP, orari di accesso, tipo di browser e sistema operativo utilizzato, referrer.</li>
      <li><strong>Dati forniti volontariamente dall’utente:</strong> nome, cognome, email, numero di telefono e messaggio nel modulo di contatto o nelle prenotazioni.</li>
      <li><strong>Cookie e strumenti di tracciamento</strong> (vedi Cookie Policy): possono raccogliere informazioni a fini statistici e di profilazione.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Finalità del trattamento e basi giuridiche</h2>
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-baglio-oro/10">
            <th className="border px-2 py-1">Finalità</th>
            <th className="border px-2 py-1">Base giuridica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Rispondere a richieste e contatti</td>
            <td className="border px-2 py-1">Esecuzione di misure precontrattuali (art. 6.1.b GDPR)</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Gestione prenotazioni o servizi</td>
            <td className="border px-2 py-1">Esecuzione di contratto (art. 6.1.b)</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Analisi statistica del traffico</td>
            <td className="border px-2 py-1">Consenso (art. 6.1.a) tramite banner cookie</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Obblighi legali</td>
            <td className="border px-2 py-1">Obbligo legale (art. 6.1.c)</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Marketing diretto (es. newsletter)</td>
            <td className="border px-2 py-1">Consenso (art. 6.1.a)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Modalità e tempi di conservazione</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>I dati saranno trattati con strumenti elettronici nel rispetto dei principi di integrità e riservatezza.</li>
      <li>I dati raccolti tramite modulo contatti vengono conservati per 12 mesi.</li>
      <li>I dati di navigazione vengono conservati per fino a 26 mesi (Google Analytics, se attivo).</li>
      <li>I cookie hanno una durata variabile (vedi Cookie Policy).</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Destinatari dei dati</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Fornitori di servizi informatici (es. hosting, email, manutenzione)</li>
      <li>Provider di strumenti analitici (es. Google Ireland Ltd)</li>
      <li>Soggetti pubblici, se richiesto per obbligo di legge</li>
      <li>Tutti i soggetti sono vincolati da contratti che ne garantiscono la conformità al GDPR.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">6. Trasferimento extra-UE</h2>
    <p className="mb-4">Laddove servizi come Google Analytics, Google Fonts, YouTube, o Meta (Facebook/Instagram) siano attivi, i dati possono essere trasferiti verso Paesi extra-UE (es. Stati Uniti). Tali fornitori operano come Responsabili del trattamento e adottano clausole contrattuali standard (SCC) per garantire adeguata protezione.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">7. Diritti dell’interessato</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Accesso ai dati (art. 15)</li>
      <li>Rettifica (art. 16)</li>
      <li>Cancellazione (art. 17)</li>
      <li>Limitazione (art. 18)</li>
      <li>Portabilità (art. 20)</li>
      <li>Opposizione (art. 21)</li>
      <li>Revoca del consenso (in qualsiasi momento)</li>
    </ul>
    <p className="mb-4">Può inviare richiesta scritta a: <a href="mailto:info@baglioabbate.it" className="underline">info@baglioabbate.it</a><br />
    Ha inoltre il diritto di proporre reclamo al Garante Privacy (<a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer" className="underline">www.garanteprivacy.it</a>).</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">8. Protezione dei minori</h2>
    <p className="mb-4">Il sito non è rivolto a minori di 14 anni. I dati eventualmente inviati verranno cancellati.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">9. Modifiche alla presente informativa</h2>
    <p className="mb-4">Ci riserviamo il diritto di aggiornare questa informativa. Le modifiche saranno pubblicate su questa pagina.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">10. Cookie</h2>
    <p>Per informazioni dettagliate sui cookie usati da questo sito, consulta la nostra <a href="/cookie-policy" className="underline">Cookie Policy</a>.</p>
  </div>
);

export default PrivacyPolicy; 