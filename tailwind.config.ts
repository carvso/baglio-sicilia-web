
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
				// Palette Baglio Abbate - Ottimizzata con Blu Navy del Logo
				baglio: {
					// Colori principali basati sul logo
					ebano: '#1a2040',           // Blu Navy del Logo - colore dominante
					oro: '#d4af37',             // Oro del Logo - accenti principali
					ebanoIntenso: '#0f1319',    // Blu Navy più scuro per sfondi
					oroImperiale: '#c09b46',    // Oro più scuro per hover
					
					// Colori complementari
					crema: '#f3eada',           // Avorio elegante per sfondi chiari
					cremaIntonacata: '#f2e7d2', // Crema alternativa
					grigio: '#8a8fa3',          // Grigio per testi secondari
					grigioMarmoreo: '#cccccc',  // Grigio più chiaro
					
					// Colori di accento
					rosa: '#e8a0bd',            // Rosa cipria per dettagli romantici
					rosaBouganvillea: '#f76fa8', // Rosa più vivace
					vino: '#6a1b2a',            // Vino siciliano per emozioni
					vinoSiciliano: '#6a1b2a',   // Alias per consistenza
					
					// Colori naturali
					salvia: '#4e6437',          // Verde salvia
					verdeUlivo: '#3f5228',      // Verde ulivo
					verdeScuro: '#4e6437',      // Alias verde scuro
					rame: '#a2703d',            // Rame antico
					rameAntico: '#a2703d',      // Alias rame
					bronzoAntico: '#8b5e3c',    // Bronzo per decorazioni
					
					// Variazioni blu (mantenendo coerenza con il logo)
					blu: '#2a2a4d',             // Blu notte alternativo
					bluNotte: '#2a2a4d',        // Alias blu notte
					bluNottaReale: '#1a2040',   // Stesso del logo
					bluLavagna: '#1a1f3c',      // Blu lavagna
					indaco: '#4c537d',          // Indaco polveroso
					indacoVibrante: '#5b6cae',  // Indaco più vivace
					
					// Colori legacy (per compatibilità)
					cream: '#DCC9A3',
					dark: '#1a2040',            // Ora uguale al blu del logo
					pink: '#e8a0bd',
					lightpink: '#f3eada',
					gray: '#8a8fa3',
					burgundy: '#6a1b2a',
					
					// Colori neutri
					neroFumo: '#121218',
					perlaPura: '#f5f5f7',
					perla: '#cfcfd6',
					rossoBruciato: '#6a2a2f',
					rameBruciato: '#a05a2c',
					grigioGrafite: '#999ca8',
					lavagna: '#8a8fa3',
					avorioCalcareo: '#f3eada',
					cremaSabbia: '#e7d9c0',
					vinoTerre: '#7b2e3a',
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
				'crimson': ['Crimson Pro', 'Times New Roman', 'serif'],
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'serif': ['Crimson Pro', 'Times New Roman', 'serif'],
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
