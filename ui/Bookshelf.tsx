import CreateList from '@/ui/CreateList';

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
  const lists = await fetchShelves();

  return (
    <>
      <CreateList />
      {/* {JSON.stringify(lists)} */}
    </>
  );
}
