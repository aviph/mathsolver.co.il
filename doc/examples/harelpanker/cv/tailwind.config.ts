import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import fluid, { extract,screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  darkMode: "class",
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        general_sans: ['var(--font-general_sans)'],
      },
      colors: {
        background: "#101419",
        foreground: "#a6adbb",
        neutral: '#2a323c',
      },
    },
  },
  plugins: [fluid, addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}