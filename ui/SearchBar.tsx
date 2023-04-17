'use client';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/search?query=${query}`);
    const books = await res.json();
    getSearchResults(books);
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
