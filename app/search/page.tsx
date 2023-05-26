import { BookData } from '@/types';
import HorizontalBook from '@/components/HorizontalBook';

async function getData(query: string) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/search?query=${query}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const results = data.map((bookData: BookData) => {
    console.log(bookData.image);
    return (
      <HorizontalBook
        key={bookData.isbn}
        bookData={bookData}
        condensed={true}
      />
    );
  });
  return results;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const query = searchParams.query;
  const results = await getData(query);
  return <div>{results}</div>;
}
