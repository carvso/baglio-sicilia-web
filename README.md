
# Baglio Abbate - Website

Sito web ufficiale di Baglio Abbate, ristorante e location per eventi a Balestrate (PA).

## Sviluppo in Locale

```bash
npm install
npm run dev
```

## Build e Deploy

### Build Locale
```bash
npm run build
```

### Build per GitHub Pages
```bash
GITHUB_PAGES=true npm run build
```

### Preview Locale
```bash
npm run preview
```

## Deploy su GitHub Pages

Il deploy avviene automaticamente tramite GitHub Actions quando si fa push sul branch `main`.

### Configurazione Repository GitHub

1. Vai nelle Settings del repository `baglio-sicilia-web`
2. Nella sezione "Pages":
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### Configurazione Dominio Personalizzato (Opzionale)

Se hai un dominio personalizzato, aggiungi il file `CNAME` nella root del progetto con il tuo dominio.

## Struttura del Progetto

- `/src` - Codice sorgente React
- `/public` - Asset statici
- `/public/lovable-uploads` - Immagini caricate
- `/.github/workflows` - GitHub Actions per il deploy

## Tecnologie Utilizzate

- React 18
- TypeScript
- Vite
- Tailwind CSS  
- React Router DOM
- Shadcn/ui Components

## Note per GitHub Pages

Il progetto è configurato per funzionare correttamente su GitHub Pages:
- I percorsi delle immagini sono gestiti automaticamente tramite `getLovableUploadPath()`
- Il routing SPA è supportato tramite `404.html` che reindirizza al router principale
- Il build process configura automaticamente il base path `/baglio-sicilia-web/`
- Tutti i link interni utilizzano React Router per evitare reload della pagina

### Debug GitHub Pages

Se il sito non carica:
1. Controlla che il repository si chiami esattamente `baglio-sicilia-web`
2. Verifica che GitHub Pages sia configurato sul branch `gh-pages`
3. Controlla i log della GitHub Action per errori di build
4. Testa il build locale con `GITHUB_PAGES=true npm run build && npm run preview`
