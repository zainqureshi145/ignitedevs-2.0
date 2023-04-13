const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { withAnimations } = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
        libre: ['"IM Fell English"', 'serif', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),require('tailwind-scrollbar-hide')],
  darkMode: 'class',
});
