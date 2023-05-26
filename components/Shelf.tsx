'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Shelf({ id, name }: { id: string; name: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const router = useRouter();

  async function editShelf(id: string): Promise<void> {
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

  async function deleteShelf(id: string): Promise<void> {
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
          <button onClick={() => editShelf(id)}>Submit</button>
        </>
      ) : (
        <>
          {name}
          <button onClick={() => editShelf(id)}>Edit</button>
        </>
      )}

      <button onClick={() => deleteShelf(id)}>Delete</button>
    </div>
  );
}
