import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { isbn: string };
  }
) {
  const isbn = params.isbn;
  const link = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${process.env.BOOKS_API_KEY}`;
  let res = await fetch(link);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const book = data.items[0]['volumeInfo'];
  return NextResponse.json(book);
}

export async function POST(request: Request) {
  const book = await request.json();
  return NextResponse.json({ message: 'Test' });
}
