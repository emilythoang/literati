import { NextResponse } from 'next/server';

export async function GET() {
  const link = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NYT_API_KEY}`;
  const res = await fetch(link);
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
      return {
        title: title,
        authors: author,
        isbn: primary_isbn13,
        image: book_image,
        rank: rank,
        description: description,
        amazon: amazon_product_url,
      };
    }
  );
  return NextResponse.json(books);
}
