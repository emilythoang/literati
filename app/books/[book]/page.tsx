import { BookWrapper } from '@/components/BookWrapper';

async function getData(isbn: string) {
  console.log(isbn);
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/books/${isbn}`);
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
      <BookWrapper
        bookData={bookData}
        key={bookData.isbn}
        displayGetMore={false}
      />
    </div>
  );
}
