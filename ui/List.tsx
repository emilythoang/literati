'use client';

// import Book from './book.jsx';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function List({ id, name }: { id: string; name: string }) {
  const router = useRouter();

  async function editList(id: string): Promise<void> {
    await fetch(`/api/bookshelves/${id}`, {
      method: 'PATCH',
    });
    router.refresh();
  }

  async function deleteList(id: string): Promise<void> {
    await fetch(`/api/bookshelves/${id}`, {
      method: 'DELETE',
    });
    router.refresh();
  }
  return (
    <div>
      {name}
      <button onClick={() => editList(id)}>Edit</button>
      <button onClick={() => deleteList(id)}>Delete</button>
    </div>
  );
}
