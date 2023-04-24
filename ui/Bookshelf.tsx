'use client';
import { useState } from 'react';
import Link from 'next/link';
import List from './List';

async function fetchShelves() {
  const res = await fetch(`http://localhost:3000/api/bookshelves`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
  //   const lists = data.map((list) => {
  //     return <List key={list.id} id={list.id} name={list.name} />;
  //   });
  //   return lists;
}

export default async function Bookshelf() {
  const [list, setList] = useState('');
  const lists = await fetchShelves();

  const addList = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(list);
    try {
      const body = { list };
      await fetch(`/api/bookshelves`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={addList}>
        <h2>Add List</h2>
        <label>
          Name
          <input
            value={list}
            onChange={(e) => setList(e.target.value)}
            type="text"
          />
        </label>
        <div>
          <button type="submit">Add</button>
          <Link href="/profile">Cancel</Link>
        </div>
      </form>
      {JSON.stringify(lists)}
    </div>
  );
}
