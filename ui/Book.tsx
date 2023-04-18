'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BookData } from '@/types';
// import HeartButton from './HeartButton';
import { ErrorBoundary } from 'react-error-boundary';

export default function Book({
  props,
  displayGetMore = false,
}: {
  props: BookData;
  displayGetMore: boolean;
}) {
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
  } = props;
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
      <div>
        <span>Add to Favorites </span>
        {/* <HeartButton book={props} /> */}
      </div>
    </div>
  );
}
