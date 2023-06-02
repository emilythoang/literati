import { Card, CardContent, CardFooter } from '@/components/ui/card';
import DropdownWrapper from '@/components/DropdownWrapper';
import Image from 'next/image';
import { BookProps } from '@/types';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

export default function HorizontalBook({ bookData, condensed }: BookProps) {
  const {
    title,
    authors,
    isbn,
    description,
    image,
    publishedDate,
    pageCount,
    categories,
  } = bookData;
  return (
    <Card className="flex flex-col items-center min-w-full p-2 lg:p-8 ">
      <CardContent className="min-w-full grid grid-cols-1 items-center md:grid-cols-4">
        <div className="w-[150px] h-[250px] relative flex justify-center items-center border">
          {image ? (
            <Image
              alt={title}
              src={image}
              fill={true}
              className="object-cover"
            />
          ) : (
            <span>No image available</span>
          )}
        </div>
        <div className="md:col-span-3">
          {condensed ? (
            <Link
              href={`/books/${isbn}`}
              className="text-4xl md:text-5xl font-semibold underline-offset-4 hover:underline hover:text-primary"
            >
              {title}
            </Link>
          ) : (
            <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
          )}

          {authors ? (
            <h2 className="text-2xl md:text-3xl">{authors.join(', ')}</h2>
          ) : (
            ''
          )}
          {publishedDate ? <p>Published {publishedDate}</p> : ''}
          {!condensed ? <p>{description}</p> : ''}
          {pageCount ? <p>{pageCount} pages</p> : ''}
          {!condensed && categories
            ? categories.map((category) => (
                <Badge key={category}>{category}</Badge>
              ))
            : ''}
          <CardFooter className="flex justify-between p-0">
            {condensed ? (
              <Link
                href={`/books/${isbn}`}
                className={buttonVariants({ variant: 'outline' })}
              >
                Go to book page
              </Link>
            ) : (
              ''
            )}
            {/* @ts-expect-error Async Server Component */}
            {!condensed ? <DropdownWrapper bookData={bookData} /> : ''}
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
