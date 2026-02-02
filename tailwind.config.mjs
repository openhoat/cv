/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bleu-sarcelle': {
          400: '#016B4E',
          500: '#014A38',
          600: '#013227',
          700: '#011E17',
        },
        'jaune-moutarde': {
          400: '#E5C75B',
          500: '#DBB32D',
          600: '#C99E14',
          700: '#A87E0F',
        },
      },
    },
  },
  plugins: [],
}