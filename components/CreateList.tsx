'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateList() {
  const router = useRouter();
  const [list, setList] = useState('');
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = { list };
      await fetch(`/api/bookshelves`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setList('');
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <h2>Add List</h2>
      <label>
        Name
        <br />
        <input
          type="text"
          name="bookshelf"
          value={list}
          onChange={(e) => {
            setList(e.target.value);
          }}
          required
        />
      </label>
      <div className="">
        <input type="submit" value="Submit" />
        <Link href="/profile">Cancel</Link>
      </div>
    </form>
  );
}
