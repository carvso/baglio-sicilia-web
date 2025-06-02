import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Elite Dark Color Palette
				elite: {
					dark: '#1A1F2C',        // Blu scuro principale
					darker: '#0F1319',      // Blu molto scuro per sfondi
					gold: '#D4AF37',        // Oro principale
					goldLight: '#E5C76B',   // Oro chiaro per hover
					sunset: '#F97316',      // Arancione tramonto
					sunsetLight: '#FDBA74', // Arancione tramonto chiaro
				},
				// Nuova palette di colori per Baglio Abbate
				baglio: {
					ebano: '#1b1b1b',       // Ebano Notte – sfondo scuro
					oro: '#c9a227',         // Oro Antico – accenti e titoli
					rosa: '#e8a0bd',        // Rosa Cipria – dettagli romantici
					salvia: '#4e6437',      // Salvia Profonda – connessione naturale
					crema: '#e7d9c0',       // Crema Sabbia – sfondo chiaro alternativo
					vino: '#8c3743',        // Vino Terroso – elementi emozionali
					blu: '#2a2a4d',         // Blu Notte – alternativa elegante al nero
					grigio: '#b0b0b0',      // Grigio Fumo – testi secondari
					rame: '#a2703d',        // Rame Antico – dettagli rustici caldi
					cream: '#DCC9A3',       // Beige/Crema (mantenuto dalla palette precedente)
					dark: '#1A1A40',        // Blu scuro (mantenuto dalla palette precedente)
					pink: '#F55EEBDD',      // Rosa (mantenuto dalla palette precedente)
					lightpink: '#F55EBDD',  // Rosa più chiaro/sfondo principale (mantenuto dalla palette precedente)
					gray: '#A9A9A9',        // Grigio (mantenuto dalla palette precedente)
					burgundy: '#722F37',     // Bordeaux (mantenuto dalla palette precedente)
					
					// Nuova palette Blu Notte
					bluNotte: '#2a2a4d',    // Blu Notte – accento principale
					indaco: '#4c537d',      // Indaco Polveroso – dettagli interattivi
					verdeScuro: '#4e6437',  // Salvia Profonda – elemento naturale 
					cremaSabbia: '#e7d9c0', // Crema Sabbia – sfondo alternativo chiaro
					rameAntico: '#a2703d',  // Rame Antico – caldo e rustico
					vinoTerre: '#7b2e3a',   // Vino Terre Bruciate – profondità emozionale
					lavagna: '#8a8fa3',     // Grigio Lavagna – testi secondari
					perla: '#cfcfd6',       // Perla Fredda – contrasto delicato
					
					// Rustico Elegante con Accenti Oro/Rosa
					ebanoIntenso: '#0f0f0f',  // Ebano Intenso - sfondo principale (dark mode)
					oroImperiale: '#d4a017',  // Oro Imperiale - accenti, pulsanti, titoli
					rosaBouganvillea: '#f76fa8', // Rosa Bouganvillea - dettagli femminili e delicati
					verdeUlivo: '#3f5228',    // Verde Ulivo - naturale ma contrastante
					cremaIntonacata: '#f2e7d2', // Crema Intonacata - sfondo chiaro elegante
					vinoSiciliano: '#6a1b2a', // Vino Siciliano - emozione, inviti/eventi speciali
					bluLavagna: '#1a1f3c',    // Blu Lavagna - alternativa elegante al nero
					grigioMarmoreo: '#cccccc', // Grigio Marmoreo - testo secondario
					bronzoAntico: '#8b5e3c',  // Bronzo Antico - decorazioni, bordi
					
					// Eleganza Notturna con Accenti Blu
					neroFumo: '#121218',      // Nero Fumo - sfondo base, potente e pulito
					bluNottaReale: '#2f3a8f', // Blu Notte Reale - accenti forti (CTA, link)
					indacoVibrante: '#5b6cae', // Indaco Vibrante - hover, effetti interattivi
					verdeBosco: '#3a4727',    // Verde Bosco - contrasto naturale
					avorioCalcareo: '#f3eada', // Avorio Calcareo - sfondo chiaro elegante
					rameBruciato: '#a05a2c',  // Rame Bruciato - dettagli rustici
					rossoBruciato: '#6a2a2f', // Rosso Bruciato - elementi emozionali
					grigioGrafite: '#999ca8', // Grigio Grafite - testi, cornici
					perlaPura: '#f5f5f7',     // Perla Pura - contrasto delicato su scuro
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'fade-up': 'fade-up 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
