'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { RxMagnifyingGlass } from 'react-icons/rx';

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
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="search"
        id="search"
        name="search"
        placeholder="Search..."
        aria-label="Search books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">
        <RxMagnifyingGlass className="mr-2 h-4 w-4" /> Search
      </Button>
    </form>
  );
}
