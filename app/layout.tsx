import './globals.css';
import React from 'react';
import AuthContext from './(auth)/AuthContext';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/Toaster';
import { Inter, Lora, Poppins, Open_Sans } from 'next/font/google';

export const metadata = {
  title: 'Literati',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  // display: 'swap',
  variable: '--font-open-sans',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${open_sans.variable} ${lora.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen">
        <AuthContext>
          <Toaster />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
