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
        /*background: "var(--background)",
        foreground: "var(--foreground)",*/
        bgcolor: 'rgba(33,33,33,255)',
        textColor: 'rgb(169, 169, 169)',
        allTextColor: 'rgb(230, 230, 230)',
        offerBack: 'rgba(39,39,39,255)',
        skillsBack: 'rgba(13,13,13,255)',
        borderColor: 'rgb(87, 87, 87)',
        bgInput: 'rgba(33,37,41,255)',
        bgFooter: 'rgba(33,38,41,255)',
      },
    },
  },
  plugins: [],
} satisfies Config;
