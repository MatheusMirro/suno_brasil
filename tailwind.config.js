/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'suno-gray':'#eff3f3',
        'suno-dark-blue':'#012340',
        'suno-acqua':'#00cbc5',
        'suno-light-acqua':'#80e5e2',
        'suno-yellow':'#ede46b',
        'suno-light-yellow':'#f6f2b5'
      }
    },
  },
  plugins: [],
}

