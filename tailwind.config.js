/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 / gray-700 */
        input: "var(--color-input)", /* gray-100 / gray-800 */
        ring: "var(--color-ring)", /* blue-500 / blue-400 */
        background: "var(--color-background)", /* white / gray-900 */
        foreground: "var(--color-foreground)", /* gray-800 / gray-50 */
        primary: {
          DEFAULT: "var(--color-primary)", /* blue-600 / blue-500 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* gray-600 / gray-500 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 / red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 / gray-700 */
          foreground: "var(--color-muted-foreground)", /* gray-500 / gray-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* teal-600 / teal-500 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white / gray-800 */
          foreground: "var(--color-popover-foreground)", /* gray-800 / gray-50 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white / gray-800 */
          foreground: "var(--color-card-foreground)", /* gray-800 / gray-50 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 / green-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 / amber-300 */
          foreground: "var(--color-warning-foreground)", /* white / gray-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 / red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        portfolio: {
          dark: "var(--color-portfolio-dark)", /* gray-900 / gray-950 */
          light: "var(--color-portfolio-light)", /* gray-100 / gray-800 */
          highlight: "var(--color-portfolio-highlight)", /* cyan-500 / cyan-400 */
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-in",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}