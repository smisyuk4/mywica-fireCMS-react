import fireCMSConfig from "@firecms/ui/tailwind.config.js";

export default {
  presets: [fireCMSConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@firecms/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px", // => @media (min-width: 360px)
        "2xs": "480px", // => @media (min-width: 480px)
        sm: "640px", // => @media (min-width: 640px)
        md: "768px", // => @media (min-width: 768px)
        lg: "1024px", // => @media (min-width: 1024px)
        "lg-h": {
          raw: "(min-width: 1024px) and (min-height: 769px)"
        },
        xl: "1280px", // => @media (min-width: 1280px)
        "xl-h": {
          raw: "(min-width: 1280px) and (min-height: 720px)"
        },
        "2xl": "1440px" // => @media (min-width: 1440px)
      },
      backgroundImage: {
        home: "url('/images/home/home-360-800.webp')",
        "sm-home": "url('/images/home/home-768-1024.webp')",
        "lg-home": "url('/images/home/home-1024-768.webp')",
        "lg-h-home": "url('/images/home/home-800-1280.webp')",
        "xl-h-home": "url('/images/home/home-1440-900.webp')",
        "2xl-home": "url('/images/home/home-1440-1024.webp')"
      },
      boxShadow: {
        button: "0 2px 4px #00000066"
      },
      colors: {
        primary: "var(--fcms-primary)",
        "primary-bg": "var(--fcms-primary-bg)",
        secondary: "var(--fcms-secondary)",
        field: {
          disabled: "rgb(224 224 226)",
          "disabled-dark": "rgb(35 35 37)"
        },
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.7)",
          disabled: "rgba(0, 0, 0, 0.5)",
          "primary-dark": "#ffffff",
          "secondary-dark": "rgba(255, 255, 255, 0.70)",
          "disabled-dark": "rgba(255, 255, 255, 0.6)"
        },
        surface: {
					50: "#e0f6f4ed",
          100: "#b3e4df",
          200: "#80d3c9",
					300: "#4cc2b3",
          400: "#26b4a0",
					400: "#26b4a0",
					500: "#5de0d3",
					600: "#0d867b",
          700: "#0b6d66",
          800: "#095d55",
          900: "#054842f0",
          950: "#032d2a"
        },
        "surface-accent": {
          50: "#e2faf8",
          100: "#b6f1ec",
          200: "#89e9e0",
          300: "#5de0d3",
					400: "#5de0d3",
          500: "#0fcdb8",
					600: "#0db8a6",
          700: "#0aa291",
          800: "#008f80",
          900: "#00786d",
          950: "#004a44"
        }
      }
    }
  },
  plugins: []
};
