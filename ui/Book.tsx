'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BookData } from '@/types';
import HeartButton from './HeartButton';
import { ErrorBoundary } from 'react-error-boundary';

async function getGoogleData({
  isbn,
  title = '',
}: {
  isbn: string;
  title: string;
}) {
  const url = new URL('http://localhost:3000/api/books?');
  const params = { isbn, title };
  url.search = new URLSearchParams(params).toString();
  const res = await fetch(url);
  if (!res.ok) {
    console.log(`res is ${JSON.stringify(res)}`);
    throw new Error(`Failed to fetch data for ${title}`);
  }
  const data = await res.json();
  return data;
}

export default async function Book({
  bookData,
  isbn,
  displayGetMore,
}: {
  bookData?: BookData;
  isbn: string;
  displayGetMore: boolean;
}) {
  const defaults: Pick<
    BookData,
    'rank' | 'publishedDate' | 'pageCount' | 'categories' | 'amazon'
  > = {
    rank: null,
    publishedDate: null,
    pageCount: null,
    categories: null,
    amazon: null,
  };
  let book: BookData = {
    ...defaults,
    ...bookData,
  };

  const data = await getGoogleData(isbn, book.title);
  const googleData = {
    title: data.title,
    authors: data.authors,
    image: data.imageLinks.thumbnail,
    description: data.description,
    publishedDate: data.publishedDate,
    pageCount: data.pageCount,
    categories: data.categories,
  };
  if (displayGetMore) {
    googleData.description = data.description;
  }
  book = { ...defaults, isbn: isbn, ...googleData };
  let {
    title,
    authors,
    publishedDate,
    image,
    description,
    pageCount,
    categories,
    amazon,
  } = book;
  return (
    <div>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <h1>{title}</h1>
        <h2>{authors}</h2>
        {publishedDate ? <p>{publishedDate}</p> : ''}
        <Image alt={title} src={image} width={150} height={150}></Image>
        <p>{description}</p>
        {pageCount ? <p>{pageCount}</p> : ''}
        {categories ? <p>{categories}</p> : ''}
        {displayGetMore ? <Link href={`/books/${isbn}`}>Learn more </Link> : ''}
        {amazon ? <a href={amazon}>Buy Here</a> : ''}
        <div>
          <span>Add to Favorites </span>
          <HeartButton book={book} />
        </div>
      </ErrorBoundary>
    </div>
  );
}
