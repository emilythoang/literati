import { BookWrapper } from '@/components/BookWrapper';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DropdownWrapper from '@/components/DropdownWrapper';
import Image from 'next/image';

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
    // isbn: isbn,
    description: book.description,
    image: book.imageLinks.thumbnail,
    publishedDate: book.publishedDate,
    pageCount: book.pageCount,
    categories: book.categories,
  };
  const {
    title,
    authors,
    // isbn,
    description,
    image,
    publishedDate,
    pageCount,
    categories,
  } = bookData;
  return (
    <div className="flex items-center justify-center">
      <Card className="p-2 lg:p-8">
        <CardContent className="flex-col items-center justify-between md:flex-row lg:gap-8">
          <Image alt={title} src={image} width={150} height={150}></Image>
          <div>
            <h1 className="text-5xl font-semibold">{title}</h1>
            <h2 className="text-3xl">{authors}</h2>
            {publishedDate ? <p>Published {publishedDate}</p> : ''}
            <p>{description}</p>
            {pageCount ? <p>{pageCount}</p> : ''}
            {categories ? <p>{categories}</p> : ''}
            <CardFooter className="flex justify-between">
              {/* @ts-expect-error Async Server Component */}
              <DropdownWrapper bookData={bookData} />
            </CardFooter>
          </div>
        </CardContent>
      </Card>

      {/* <BookWrapper
        bookData={bookData}
        key={bookData.isbn}
        displayGetMore={false}
      /> */}
    </div>
  );
}
