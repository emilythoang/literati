import Link from 'next/link';
import Image from 'next/image';
// import HeartButton from './heartButton.js';

// async function getGoogleData(isbn, title) {
//   const url = new URL('http://localhost:3000/api/books?');
//   const params = { isbn, title };
//   url.search = new URLSearchParams(params).toString();
//   const res = await fetch(url);
//   if (!res.ok) {
//     console.log(`res is ${JSON.stringify(res)}`);
//     // throw new Error(`Failed to fetch data for ${title}`);
//   }
//   const data = await res.json();
//   return data;
// }

export interface BookData {
  isbn: string;
  title: string;
  authors: string[];
  image: string;
  description: string;
  rank?: number | null;
  publishedDate?: string | null;
  pageCount?: number | null;
  categories?: string[] | null;
  amazon?: string | null;
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

  //   const book: BookData = {
  //     ...defaults,
  //     ...bookData,
  //   };

  //   const data = await getGoogleData(isbn, props.title);
  //   const googleData = {
  //     title: data.title,
  //     author: data.authors,
  //     image: data.imageLinks.thumbnail,
  //     publishedDate: data.publishedDate,
  //     pageCount: data.pageCount,
  //     categories: data.categories,
  //   };
  //   if (displayGetMore) {
  //     googleData.description = data.description;
  //   }
  //   const book = { ...defaultProps, isbn: isbn, ...props, ...googleData };
  //   // console.log(book);
  //   let book;
  //     let {
  //       title,
  //       authors,
  //       publishedDate,
  //       image,
  //       description,
  //       pageCount,
  //       categories,
  //       amazon,
  //     } = book;
  return (
    <div>
      {/* <h1>{title}</h1>
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
      </div> */}
    </div>
  );
}
