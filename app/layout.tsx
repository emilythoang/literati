import './globals.css';
import React from 'react';
import AuthContext from './(auth)/AuthContext';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/Toaster';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Literati',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthContext>
          <Toaster />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
