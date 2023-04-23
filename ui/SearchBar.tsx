'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('query', query);
    const urlParams = params.toString();
    router.push('search' + '?' + urlParams);
    setQuery('');
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
