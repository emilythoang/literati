import './globals.css';
import React from 'react';
import AuthContext from './(auth)/AuthContext';
import NavBar from '@/ui/NavBar';
import SearchBar from '@/ui/SearchBar';
import Footer from '@/ui/Footer';

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
          {/* @ts-expect-error Async Server Component */}
          <NavBar />
          <SearchBar />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
