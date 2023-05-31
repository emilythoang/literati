import './globals.css';
import React from 'react';
import AuthContext from './(auth)/AuthContext';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
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
          <NavBar />
          <Toaster />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
