import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log('fetch in search api');
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const link = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.BOOKS_API_KEY}`;
  let res = await fetch(link);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const results = data.items;
  console.log(results);
  return NextResponse.json(results);
}
