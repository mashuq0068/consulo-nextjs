import { Inter, Poppins, Playfair_Display, Merriweather, PT_Serif} from 'next/font/google';

// export const inter = Inter({ 
//   weight: ['300', '400',  '700'],
//   subsets: ['latin'],
//   variable: '--font-body--family'
// });

export const poppins = PT_Serif({
  weight: ['400',  '700'],
  subsets: ['latin'],
  variable: '--font-heading--family'
});

export const poppinsButton = PT_Serif({
  weight: ['400',  '700'],
  subsets: ['latin'],
  variable: '--font-button--family'
});

/* 👇 NEW FONT */
export const playfair = PT_Serif({
  weight: ['400',  '700'],
  subsets: ['latin'],
  variable: '--font-body--family'
});

export const fonts = [ poppins, poppinsButton, playfair]
  .map(font => font.variable)
  .join(" ");