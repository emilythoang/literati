import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DropdownWrapper from '@/components/DropdownWrapper';
import Image from 'next/image';
import { BookData, BookProps } from '@/types';

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
    <div className="flex items-center justify-center">
      <Card className="p-2 lg:p-8">
        <CardContent className="flex-col items-center justify-between md:flex-row lg:gap-8">
          {image ? (
            <Image alt={title} src={image} width={150} height={150}></Image>
          ) : (
            <div className="w-[150px] h-[250px] flex justify-center items-center border">
              No image available
            </div>
          )}
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
    </div>
  );
}
