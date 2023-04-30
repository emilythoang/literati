import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/db';
import CreateList from '@/components/CreateList';
import List from './List';
import { ListProps } from '@/types';

const fetchShelves = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('You must be logged in to have lists');
    return;
  }
  const data = await prisma.list.findMany({
    where: { userId: session.user.id },
  });
  const lists = data.map((list: ListProps) => {
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