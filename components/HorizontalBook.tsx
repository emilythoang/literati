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
    <Card className="flex min-w-full flex-col items-center p-2 lg:p-8 ">
      <CardContent className="grid min-w-full grid-cols-1 items-center pt-6 md:grid-cols-4 ">
        <div className="relative flex h-[250px] w-[150px] items-center justify-center border lg:h-[300px] lg:w-[180px]">
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
        <div className="space-y-2 md:col-span-3">
          {condensed ? (
            <Link
              href={`/books/${isbn}`}
              className="text-4xl font-semibold underline-offset-4 hover:text-primary hover:underline md:text-5xl"
            >
              {title}
            </Link>
          ) : (
            <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
          )}

          {authors ? (
            <h2 className="text-2xl md:text-3xl">{authors.join(', ')}</h2>
          ) : (
            ''
          )}
          <div>
            {publishedDate ? <p>Published {publishedDate}</p> : ''}
            {pageCount ? <p>{pageCount} pages</p> : ''}
            {!condensed && categories
              ? categories.map((category) => (
                  <Badge key={category}>{category}</Badge>
                ))
              : ''}
          </div>
          {!condensed ? <p>{description}</p> : ''}
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
