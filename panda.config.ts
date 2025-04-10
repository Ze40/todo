import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      //Брэйкпоинты для адаптива
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      //Отзывчивые токены
      semanticTokens: {
        fontSizes: {
          normal: { value: { '2xl': '16px', xl: '10px' } },
        },
      },

      //Статичные токены
      tokens: {
        //Цвета
        colors: {
          primary: { value: '#FAFAFA' },
          secondary: { value: '#000' },
          foggy: { value: '#E0E0E0' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: '/src/styled-system',
});
