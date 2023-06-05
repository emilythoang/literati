import book from '../public/book.gif';
import books from '../public/books.gif';
import search from '../public/search.gif';
import shelves from '../public/shelves.gif';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Features() {
  return (
    <section className="flex min-h-screen flex-1 flex-col items-center justify-center space-y-6  bg-slate-50 px-4 py-8 text-black dark:bg-transparent md:py-12 lg:space-y-8">
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold sm:text-3xl md:text-6xl">Features</h2>
        <p className="text-muted-foreground sm:text-lg md:text-xl">
          Cultivate a Lifelong Reading Habit with Effortless Book Management
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 justify-center gap-4 md:max-w-5xl md:grid-cols-2 md:gap-6 lg:max-w-3xl 2xl:gap-10">
        <Card className="px-3 py-2 lg:px-4">
          <CardHeader className="flex justify-between">
            <Image src={books} alt="Books" width={100} height={100} />
            <CardTitle className="text-[#5b519c]">
              Keep track of your books.{' '}
            </CardTitle>
            <CardDescription>To Read, Reading, Read. </CardDescription>
          </CardHeader>
        </Card>
        <Card className="px-3 py-2 lg:px-4">
          <CardHeader className="flex justify-between">
            <Image src={book} alt="Book" width={100} height={100} />
            <CardTitle className="text-[#f876a9]">
              Explore books you&apos;ll love.
            </CardTitle>
            <CardDescription>Decide what to read next. </CardDescription>
          </CardHeader>
        </Card>
        <Card className="px-3 py-2 lg:px-4">
          <CardHeader className="flex justify-between">
            <Image src={search} alt="Search" width={100} height={100} />
            <CardTitle className="text-[#f28964]">Find any book.</CardTitle>
            <CardDescription>Search our extensive repository.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="px-3 py-2 lg:px-4">
          <CardHeader className="flex justify-between">
            <Image src={shelves} alt="Bookshelves" width={100} height={100} />
            <CardTitle className="text-[#4a90e2]">
              Organize your personal library.
            </CardTitle>
            <CardDescription>Create customized bookshelves. </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
