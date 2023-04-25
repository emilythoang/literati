'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
  const [bookshelf, setBookshelf] = useState('');
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = { bookshelf };
      await fetch(`/api/bookshelves`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setBookshelf('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <h2>Add Bookshelf</h2>
      <label>
        Name
        <br />
        <input
          type="text"
          name="bookshelf"
          value={bookshelf}
          onChange={(e) => {
            setBookshelf(e.target.value);
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
