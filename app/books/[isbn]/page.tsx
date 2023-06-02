import HorizontalBook from '@/components/HorizontalBook';

async function getData(isbn: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/books/${isbn}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

export default async function Page({ params }: { params: { isbn: string } }) {
  const book = await getData(params.isbn);
  if (!params.isbn) throw new Error('Invalid ISBN');
  const bookData = {
    title: book.title,
    authors: book.authors,
    isbn: params.isbn,
    description: book.description,
    image: book.imageLinks.thumbnail,
    publishedDate: book.publishedDate,
    pageCount: book.pageCount,
    categories: book.categories,
  };
  return (
    <div className="p-4 md:px-8 lg:px-12 ">
      <HorizontalBook bookData={bookData} condensed={false} />
    </div>
  );
}
