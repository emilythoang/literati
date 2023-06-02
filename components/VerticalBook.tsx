'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BookData, BookProps } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function VerticalBook({ bookData }: { bookData: BookData }) {
  const { title, authors, isbn, description, image, amazon } = bookData;
  return (
    <Card className="flex flex-col">
      <CardHeader className="text-center items-center">
        <Image
          alt={title}
          src={image}
          height={250}
          width={150}
          style={{
            width: 'auto',
            height: '100%',
          }}
        ></Image>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg">By {authors}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col grow">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-6 justify-around">
        <Button>
          <Link href={`/books/${isbn}`}>Learn more </Link>
        </Button>
        <Button variant="outline">
          <a href={amazon}>Buy Here</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
