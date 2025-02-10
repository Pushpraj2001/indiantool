import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

module.exports = {
  theme: {
    extend: {
      colors: {
        // Define your light mode colors here
        background: '#ffffff',
        text: '#000000',
      },
    },
  },
  variants: {},
  plugins: [],
};