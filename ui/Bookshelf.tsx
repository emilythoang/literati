'use client';

import { use, cache } from 'react';

import CreateList from '@/ui/CreateList';
import List from './List';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

interface List {
  id: string;
  name: string;
  userId: string;
}

const fetchShelves = cache(async () => {
  const res = await fetch(`/api/bookshelves`);
  console.log(res);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  console.log(data);
  console.log(`data is ${JSON.stringify(data)}`);
  const lists = data.map((list: List) => {
    return <List key={list.id} id={list.id} name={list.name} />;
  });
  return lists;
});

export default function Bookshelf() {
  const lists = use(fetchShelves());

  return (
    <>
      <CreateList />
      {lists}
    </>
  );
}
