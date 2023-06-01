import { prisma } from '@/db';
import { setFips } from 'crypto';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
    include: {
      bookshelves: {
        include: {
          books: {
            include: {
              authors: true,
              bookshelves: true,
            },
          },
        },
      },
    },
  });
  const bookshelves = user?.bookshelves.map((bookshelf) => bookshelf.id);
  let books = new Map();
  user?.bookshelves
    .filter((bookshelf) => bookshelf.books.length > 0)
    .map((bookshelf) => {
      return bookshelf.books.map((book) => {
        books.set(book.isbn, {
          title: book.title,
          isbn: book.isbn,
          image: book.image,
          authors: book.authors,
          bookshelves: book.bookshelves.filter((bookshelf) =>
            bookshelves?.includes(bookshelf.id)
          ),
        });
      });
    });
  return NextResponse.json(Array.from(books.values()));
}
