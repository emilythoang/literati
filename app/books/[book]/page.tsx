import Book from '@/ui/Book';

async function getData(isbn) {
  const link = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${process.env.BOOKS_API_KEY}`;
  const res = await fetch(link);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const book = data.items[0]['volumeInfo'];
  return book;
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
    author: book.authors,
    isbn13: isbn,
    description: book.description,
    image: book.imageLinks.thumbnail,
    publishedDate: book.publishedDate,
    categories: book.categories,
  };

  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Book isbn={bookData} key={bookData.isbn13} displayGetMore={false} />
    </div>
  );
}
