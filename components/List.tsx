'use client';

// import Book from './book.jsx';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function List({ id, name }: { id: string; name: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const router = useRouter();

  async function editList(id: string): Promise<void> {
    if (isEditing) {
      await fetch(`/api/bookshelves/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedName),
      });
      setIsEditing(false);
      setUpdatedName('');
      router.refresh();
    } else {
      setIsEditing(true);
    }
  }

  async function deleteList(id: string): Promise<void> {
    await fetch(`/api/bookshelves/${id}`, {
      method: 'DELETE',
    });
    router.refresh();
  }
  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder={name}
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          ></input>
          <button onClick={() => editList(id)}>Submit</button>
        </>
      ) : (
        <>
          {name}
          <button onClick={() => editList(id)}>Edit</button>
        </>
      )}

      <button onClick={() => deleteList(id)}>Delete</button>
    </div>
  );
}
