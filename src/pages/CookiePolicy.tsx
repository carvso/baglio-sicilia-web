import React from 'react';

const CookiePolicy = () => (
  <div className="baglio-container py-16 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-baglio-oro font-playfair">🍪 Cookie Policy</h1>
    <p className="mb-4">Questa informativa descrive l’uso dei cookie sul sito www.baglioabbate.it, in conformità al Regolamento UE 2016/679 (GDPR) e al Provvedimento del Garante Privacy 8 maggio 2014, aggiornato alle Linee guida 2021.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">Cosa sono i cookie?</h2>
    <p className="mb-4">I cookie sono piccoli file di testo che un sito invia al dispositivo dell’utente per migliorarne l’esperienza di navigazione, memorizzare preferenze o raccogliere dati in forma aggregata.</p>

    <h2 className="text-2xl font-semibold mt-8 mb-2">⚙️ Cookie utilizzati su questo sito</h2>
    <h3 className="text-xl font-semibold mt-4 mb-1">1. Cookie tecnici (necessari)</h3>
    <p className="mb-2">Questi cookie sono essenziali per il corretto funzionamento del sito. Consentono, ad esempio:</p>
    <ul className="list-disc ml-6 mb-2">
      <li>la navigazione tra le pagine,</li>
      <li>la compilazione e l’invio di moduli di contatto,</li>
      <li>l’integrazione di mappe interattive (Google Maps).</li>
    </ul>
    <p className="mb-4">Non richiedono consenso, ma è comunque possibile disabilitarli nelle impostazioni del browser.</p>

    <h3 className="text-xl font-semibold mt-4 mb-1">2. Cookie di terze parti</h3>
    <p className="mb-2">Google Maps: per mostrare la mappa interattiva nella pagina Contatti.</p>
    <p className="mb-4">Google potrebbe raccogliere dati in forma aggregata. Consulta la loro <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">privacy policy</a>.</p>

    <div className="mb-4">
      <span className="font-semibold">🔹 Non viene utilizzato Google Analytics, né altri strumenti di tracciamento a fini di profilazione.</span>
    </div>

    <h2 className="text-2xl font-semibold mt-8 mb-2">🎛️ Gestione dei cookie</h2>
    <p className="mb-2">È possibile controllare o eliminare i cookie anche attraverso le impostazioni del proprio browser. Tuttavia, la disattivazione dei cookie tecnici potrebbe compromettere la funzionalità del sito.</p>
    <p className="mb-4">Consulta le guide ufficiali per:</p>
    <ul className="list-disc ml-6 mb-4">
      <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer" className="underline">Chrome</a></li>
      <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="underline">Firefox</a></li>
      <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Safari</a></li>
      <li><a href="https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="underline">Edge</a></li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-2">📌 Titolare del trattamento</h2>
    <p>
      Medusa S.r.l.<br />
      Via Palermo 4, 90041 Balestrate (PA)<br />
      P.IVA 07167250823<br />
      Email: <a href="mailto:info@baglioabbate.it" className="underline">info@baglioabbate.it</a> – Tel: +39 331 828 6888
    </p>
  </div>
);

export default CookiePolicy; 