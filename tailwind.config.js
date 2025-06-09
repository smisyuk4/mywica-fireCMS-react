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
          secondary: "rgba(0, 0, 0, 0.52)",
          disabled: "rgba(0, 0, 0, 0.38)",
          "primary-dark": "#ffffff",
          "secondary-dark": "rgba(255, 255, 255, 0.60)",
          "disabled-dark": "rgba(255, 255, 255, 0.48)"
        },
        surface: {
          50: "#e0f5f3",
          100: "#b3e5df",
          200: "#80d6c9",
          300: "#4cc6b3",
          400: "#26b6a0",
          500: "#0da995",
          600: "#089184",
          700: "#07756d",
          800: "#06615b",
          900: "#044b45",
          950: "#032f2c"
        },
        "surface-accent": {
					50: "#e9fdf6", // дуже світлий м'ятний акцент
					100: "#c8f6e6",
					200: "#a4efda",
					300: "#7be8ce",
					400: "#4dddc0", // м'який бірюзовий
					500: "#24d0b1", // яскравий акцент, основний
					600: "#1bb59c",
					700: "#158c7b",
					800: "#0f6e62",
					900: "#0a554c",
					950: "#05332c"
        }
      }
    }
  },
  plugins: []
};
