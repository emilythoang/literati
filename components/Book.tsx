'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BookProps } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Book({
  bookData,
  displayGetMore = false,
  children,
}: BookProps) {
  const {
    title,
    authors,
    isbn,
    description,
    image,
    publishedDate = null,
    pageCount = null,
    categories = null,
    amazon = null,
  } = bookData;
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg">By {authors}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {/* {publishedDate ? <p>{publishedDate}</p> : ''} */}
        <Image alt={title} src={image} width={150} height={150}></Image>
        <p>{description}</p>
        {/* {pageCount ? <p>{pageCount}</p> : ''}
        {categories ? <p>{categories}</p> : ''} */}
      </CardContent>
      <CardFooter className="flex gap-6 justify-between">
        {displayGetMore ? (
          <Button>
            <Link href={`/books/${isbn}`}>Learn more </Link>
          </Button>
        ) : (
          ''
        )}
        {amazon ? (
          <Button>
            <a href={amazon}>Buy Here</a>
          </Button>
        ) : (
          ''
        )}
        {/* <>{children}</> */}
      </CardFooter>
    </Card>
  );
}
