import { BookData } from '@/types';
import Book from '@/ui/Book';

async function getData() {
  const link = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NYT_API_KEY}`;
  const res = await fetch(link);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const books = data.results.books.map(
    ({
      title,
      author,
      primary_isbn13,
      book_image,
      rank,
      description,
      amazon_product_url,
    }: {
      title: string;
      author: string[];
      primary_isbn13: string;
      book_image: string;
      rank: number;
      description: string;
      amazon_product_url: string;
    }) => {
      const bookData: BookData = {
        title: title,
        authors: author,
        isbn: primary_isbn13,
        image: book_image,
        rank: rank,
        description: description,
        amazon: amazon_product_url,
      };
      console.log(bookData);
      return (
        /* @ts-expect-error Async Server Component */
        <Book
          bookData={bookData}
          key={bookData.isbn}
          isbn={bookData.isbn}
          displayGetMore={true}
        />
      );
    }
  );
  return books;
}
export default async function Page() {
  const books = await getData();
  return <div>{books}</div>;
}
