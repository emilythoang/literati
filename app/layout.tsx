import './globals.css';
import React from 'react';
import NavBar from '@/ui/NavBar';
import SearchBar from '@/ui/SearchBar';
import Footer from '@/ui/Footer';
import { ClerkProvider } from '@clerk/nextjs/app-beta';

export const metadata = {
  title: 'Literati',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* @ts-expect-error Async Server Component */}
          <NavBar />
          <SearchBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
