import Book from '@/ui/Book';
import { BookData } from '@/types';

async function getData(isbn: string) {
  console.log('fetch in getData');
  const res = await fetch(`http://localhost:3000/api/books?isbn=${isbn}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

export default async function Page({ params }: { params: { book: string } }) {
  const id = params.book;
  const book = await getData(id);
  const identifiers = book.industryIdentifiers;
  let isbn;
  for (const identifier of identifiers) {
    if (identifier.type === 'ISBN_13') {
      isbn = identifier.identifier;
    }
  }
  const bookData = {
    title: book.title,
    authors: book.authors,
    isbn: isbn,
    description: book.description,
    image: book.imageLinks.thumbnail,
    publishedDate: book.publishedDate,
    categories: book.categories,
  };
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Book props={bookData} key={bookData.isbn13} displayGetMore={false} />
    </div>
  );
}
