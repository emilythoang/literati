import { LuSearch } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

export function SearchInput({
  setShowSearch,
}: {
  setShowSearch: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('query', query);
    const urlParams = params.toString();
    router.push('search' + '?' + urlParams);
    setShowSearch(false);
    setQuery('');
  };
  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full max-w-md items-center space-x-2"
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
        <LuSearch className="mr-2 h-4 w-4" /> Search
      </Button>
    </form>
  );
}
