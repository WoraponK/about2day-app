import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-primary': '#865DFF',
        'clr-primary/60': '#865DFF60',
        'clr-secondary-1': '#E384FF',
        'clr-secondary-2': '#FFA3FD',
        'clr-dark': '#191825',
        'clr-light': '#F0E9D2',
        'clr-light/40': '#F0E9D240',
        'clr-light/75': '#F0E9D275',
        'clr-light/90': '#F0E9D290',
        'clr-gray-1': '#1E1E1E',
        'clr-gray-2': '#303030',
        'clr-gray-3': '#4E4E4E',
        'clr-red': '#FF5D5D',
        'clr-orange': '#FF814B',
        'clr-yellow': '#FFBE5D',
        'clr-accent': '#29283D'
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
