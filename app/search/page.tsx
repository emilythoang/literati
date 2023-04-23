import { BookData } from '@/types';
import Book from '@/ui/Book';

async function getData(query: string) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/search?query=${query}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const results = data.map((bookData: BookData) => {
    return <Book props={bookData} key={bookData.isbn} displayGetMore={true} />;
  });
  return results;

  // const link = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
  //   query
  // )}&key=${process.env.BOOKS_API_KEY}`;
  // let res = await fetch(link);
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // const data = await res.json();
  // const results = data.items;
  // return results;

  // const link = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
  //   query
  // )}&key=${process.env.BOOKS_API_KEY}`;
  // let res = await fetch(link);
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // const data = await res.json();
  // const results = data.items;
  // return results;
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
