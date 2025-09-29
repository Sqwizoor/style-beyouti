import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'lora': ['Lora', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        spa: {
          black: "#000000",
          white: "#FFFFFF",
          pink: {
            50: "#FDF2F8",
            100: "#FCE7F3",
            200: "#FBCFE8",
            300: "#F9A8D4",
            400: "#F472B6",
            500: "#EC4899",
            600: "#DB2777",
            700: "#BE185D",
            800: "#9D174D",
            900: "#831843",
          },
          gold: {
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#FCD34D",
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
          },
          beige: {
            50: "#FEFDFB",
            100: "#FDF9F0",
            200: "#FAF2E1",
            300: "#F5E6C8",
            400: "#EED5A3",
            500: "#E4C078",
            600: "#D4A574",
            700: "#B8935F",
            800: "#9C7A4A",
            900: "#7A5F38",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.9" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        rotateIn: {
          "0%": { opacity: "0", transform: "rotate(-180deg)" },
          "100%": { opacity: "1", transform: "rotate(0deg)" },
        },
        flipIn: {
          "0%": { opacity: "0", transform: "rotateY(-90deg)" },
          "100%": { opacity: "1", transform: "rotateY(0deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.1)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(1)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        morphing: {
          "0%, 100%": { borderRadius: "25px" },
          "33%": { borderRadius: "50px 25px" },
          "66%": { borderRadius: "25px 50px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 0.8s ease-out forwards",
        "slideIn": "slideIn 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "gradientShift": "gradientShift 6s ease infinite",
        "pulse": "pulse 3s ease-in-out infinite",
        "slideInLeft": "slideInLeft 0.8s ease-out",
        "slideInRight": "slideInRight 0.8s ease-out",
        "zoomIn": "zoomIn 0.6s ease-out",
        "bounceIn": "bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "slideUp": "slideUp 0.7s ease-out",
        "slideDown": "slideDown 0.7s ease-out",
        "rotateIn": "rotateIn 0.8s ease-out",
        "flipIn": "flipIn 0.8s ease-out",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "morphing": "morphing 3s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
