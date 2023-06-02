import { BookData } from '@/types';
import VerticalBook from '@/components/VerticalBook';

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/discover`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const books = data.map((bookData: BookData) => {
    return <VerticalBook bookData={bookData} key={bookData.isbn} />;
  });
  return books;
}

export default async function Page() {
  const books = await getData();
  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 sm:gap-6 md:px-8 lg:grid-cols-3 lg:px-12 lg:gap-8 xl:grid-cols-5">
      {books}
    </div>
  );
}
