import { BookData } from '@/types';
import Book from '@/components/Book';

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/discover`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const books = data.map((bookData: BookData) => {
    return (
      <Book bookData={bookData} key={bookData.isbn} displayGetMore={true} />
    );
  });
  return books;
}

export default async function Page() {
  const books = await getData();
  return (
    <div className="m-4 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {books}
    </div>
  );
}
