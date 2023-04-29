import './globals.css';
import React from 'react';
import AuthContext from './(auth)/AuthContext';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Literati',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <NavBar />
          <SearchBar />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
