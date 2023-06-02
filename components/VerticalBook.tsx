'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BookData } from '@/types';
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
        <CardTitle className="text-2xl underline-offset-4 hover:underline hover:text-primary">
          <Link href={`/books/${isbn}`}>{title}</Link>
        </CardTitle>
        <CardDescription className="text-lg">By {authors}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col grow">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-6 justify-around">
        <Button
          variant="secondary"
          asChild
          className="hover:bg-primary hover:text-primary-foreground"
        >
          <Link href={`/books/${isbn}`}>Read more </Link>
        </Button>
        <Button variant="outline">
          <a href={amazon}>Buy here</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
