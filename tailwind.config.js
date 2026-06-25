/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#07111F',
        card: '#0F1D30',
        gold: '#D6B25E',
        goldSecondary: '#F3D483',
        textPrimary: '#FFFFFF',
        muted: '#9AA4B2',
      },
      borderColor: {
        premium: 'rgba(255,255,255,0.08)',
      },
      spacing: {
        screenX: '24px',
        screenTop: '32px',
        card: '24px',
        section: '12px',
      },
      borderRadius: {
        premium: '24px',
      },
      boxShadow: {
        premium: '0px 12px 28px rgba(0,0,0,0.35)',
      },
      fontSize: {
        hero: ['36px', { lineHeight: '44px', fontWeight: '700' }],
        title: ['30px', { lineHeight: '38px', fontWeight: '700' }],
        body: ['16px', { lineHeight: '26px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
