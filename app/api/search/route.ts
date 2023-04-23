import { NextResponse } from 'next/server';
import { Result, VolumeInfo } from '@/types';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  if (!query) {
    throw new Error('Invalid query');
  }
  const params = encodeURIComponent(query);
  const link = `https://www.googleapis.com/books/v1/volumes?q=${params}&key=${process.env.BOOKS_API_KEY}`;
  console.log(link);
  let res = await fetch(link);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const results = data.items.map((result: Result) => {
    const book = result.volumeInfo;
    const {
      title,
      authors,
      description,
      imageLinks,
      publishedDate,
      categories,
    } = book;
    const identifiers = book.industryIdentifiers;
    let isbn;
    for (const identifier of identifiers) {
      if (identifier.type === 'ISBN_13') {
        isbn = identifier.identifier;
      }
    }
    const bookData = {
      title: title,
      authors: authors,
      isbn: isbn,
      description: description,
      image: imageLinks.thumbnail,
      publishedDate: publishedDate,
      categories: categories,
    };
    return bookData;
  });
  return NextResponse.json(results);
}
