import { Inter, Poppins,  PT_Serif, Open_Sans} from 'next/font/google';

// export const inter = Inter({ 
//   weight: ['300', '400',  '700'],
//   subsets: ['latin'],
//   variable: '--font-body--family'
// });

export const poppins = Open_Sans({
  weight: ['400',  '700'],
  subsets: ['latin'],
  variable: '--font-heading--family'
});

export const poppinsButton = Open_Sans({
  weight: ['400',  '700'],
  subsets: ['latin'],
  variable: '--font-button--family'
});

/* 👇 NEW FONT */
export const playfair = Open_Sans({
  weight: ['400',  '700'],
  subsets: ['latin'],
  variable: '--font-body--family'
});

export const fonts = [ poppins, poppinsButton, playfair]
  .map(font => font.variable)
  .join(" ");