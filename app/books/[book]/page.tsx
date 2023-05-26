import HorizontalBook from '@/components/HorizontalBook';

async function getData(isbn: string) {
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
  if (!id) throw new Error('Invalid ISBN');
  const bookData = {
    title: book.title,
    authors: book.authors,
    isbn: id,
    description: book.description,
    image: book.imageLinks.thumbnail,
    publishedDate: book.publishedDate,
    pageCount: book.pageCount,
    categories: book.categories,
  };
  return <HorizontalBook bookData={bookData} condensed={false} />;
}
