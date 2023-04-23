'use client';

import { useState } from 'react';
import Link from 'next/link';
import List from './List';
import { ErrorBoundary } from 'react-error-boundary';

export default function Bookshelf() {
  const [bookshelf, setBookshelf] = useState('');
  const addList = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Link href="api/bookshelves">
        <button>Add</button>
      </Link>
      <List />
    </div>
  );
}
