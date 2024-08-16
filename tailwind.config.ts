import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      exs: '360px',
      xs: '390px',
      xxs: '450px',
      sx: '550px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
      '5xl': '2560px',
    },
    extend: {
      fontFamily: {
        BreeSerif: ['Bree Serif'],
        Knewave: ['Knewave'],
        NotoSans: ['Noto Sans'],
        Roboto: ['Roboto'],
      },
    },
  },
  plugins: [daisyui],
};
export default config;
