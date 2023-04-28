import { use, cache } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/db';
import CreateList from '@/ui/CreateList';
import List from './List';

interface List {
  id: string;
  name: string;
  userId: string;
}

const fetchShelves = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('You must be logged in to have lists');
    return;
  }
  const data = await prisma.list.findMany({
    where: { userId: session.user.id },
  });
  const lists = data.map((list: List) => {
    return <List key={list.id} id={list.id} name={list.name} />;
  });
  return lists;
};

export default async function Bookshelf() {
  const lists = await fetchShelves();

  return (
    <>
      <CreateList />
      {lists}
    </>
  );
}
