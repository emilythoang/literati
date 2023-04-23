'use client';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { NextRequest, NextResponse } from 'next/server';

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [query, setQuery] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(pathname);
    console.log(searchParams);
    // Given an incoming request...
    // const searchURL = new URL('/search');
    // searchURL.searchParams.set('query', query);
    // return NextResponse.redirect(searchURL);
    // router.push(`/search/${query}`);
    const params = new URLSearchParams();
    params.set('query', query);
    const urlParams = params.toString();
    console.log(urlParams);
    router.push('search' + '?' + urlParams);

    // router.push(searchURL.toString());
    // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/search?query=${query}`);
    // const books = await res.json();
    // console.log(books);

    // return books;
  };
  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search..."
        aria-label="Search books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
