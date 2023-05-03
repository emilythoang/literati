'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BookProps } from '@/types';

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
    <div>
      <h1>{title}</h1>
      <h2>{authors}</h2>
      {publishedDate ? <p>{publishedDate}</p> : ''}
      <Image alt={title} src={image} width={150} height={150}></Image>
      <p>{description}</p>
      {pageCount ? <p>{pageCount}</p> : ''}
      {categories ? <p>{categories}</p> : ''}
      {displayGetMore ? <Link href={`/books/${isbn}`}>Learn more </Link> : ''}
      {amazon ? <a href={amazon}>Buy Here</a> : ''}
      <>{children}</>
    </div>
  );
}
