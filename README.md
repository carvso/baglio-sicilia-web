
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
npm run build:github
```

### Preview Locale con Base Path GitHub Pages
```bash
npm run preview:github
```

## Deploy su GitHub Pages

Il deploy avviene automaticamente tramite GitHub Actions quando si fa push sul branch `main`.

### Configurazione Repository GitHub

1. Vai nelle Settings del repository
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
