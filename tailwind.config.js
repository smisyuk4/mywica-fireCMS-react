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
				//white: "#f0ffff", // cheanged because of bug in all app with not correct class name
        surface: {
          //50: "#e0f5f3",
          //100: "#b3e5df",
          //200: "#80d6c9",
          //300: "#4cc6b3",
          //400: "#26b6a0",
          //500: "#0da995",
          //600: "#089188",
          //700: "#07756d",
          //800: "#06615b",
          //900: "#044b45",
          //950: "#032f2c"
					  50: "#e0f6f4",
					100: "#b3e4df",
					200: "#80d3c9",
					300: "#4cc2b3",
					400: "#26b4a0",
					500: "#0fa494",
					600: "#0d867b",
					700: "#0b6d66",
					800: "#095d55", // основний
					900: "#054842",
					950: "#032d2a"
        },
        "surface-accent": {
					//50: "#e9fdf6",
					//100: "#c8f6e6",
					//200: "#a4efda",
					//300: "#7be8ce",
					//400: "#4dddc0",
					//500: "#24d0b1",
					//600: "#1bb59c",
					//700: "#158c7b",
					//800: "#0f6e62",
					//900: "#0a554c",
					//950: "#05332c"
					  50: "#e2faf8",
						100: "#b6f1ec",
						200: "#89e9e0",
						300: "#5de0d3",
						400: "#33d8c6",
						500: "#0fcdb8", // середній тон — #0FA999
						600: "#0db8a6",
						700: "#0aa291", // близько до #0D9688
						800: "#008f80",
						900: "#00786d",
						950: "#004a44"
        }
      }
    }
  },
  plugins: []
};
