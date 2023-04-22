'use client';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/search?query=${query}`);
    const books = await res.json();
    console.log(books);

    return books;
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
