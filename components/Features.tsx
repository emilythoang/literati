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
    <div className="flex flex-col items-center justify-center flex-1 min-h-screen text-black">
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Cultivate a Lifelong Reading Habit with Effortless Book Management
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 grid-cols-1 md:max-w-5xl md:grid-cols-2 lg:max-w-3xl">
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
                Explore books you'll love.
              </CardTitle>
              <CardDescription>Decide what to read next. </CardDescription>
            </CardHeader>
          </Card>
          <Card className="px-3 py-2 lg:px-4">
            <CardHeader className="flex justify-between">
              <Image src={search} alt="Search" width={100} height={100} />
              <CardTitle className="text-[#f28964]">Find any book.</CardTitle>
              <CardDescription>
                Search our extensive repository.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="px-3 py-2 lg:px-4">
            <CardHeader className="flex justify-between">
              <Image src={shelves} alt="Bookshelves" width={100} height={100} />
              <CardTitle className="text-[#4a90e2]">
                Organize your personal library.{' '}
              </CardTitle>
              <CardDescription>Create customized bookshelves. </CardDescription>
            </CardHeader>
          </Card>
          <Button className="bg-[#f28964]">Hello</Button>
          <Button className="bg-[#4a90e2]">Hello</Button>
          <Button className="bg-[#f876a9]">Hello</Button>
          <Button variant="outline" className="border-[#f28964]">
            Hello
          </Button>
          <Button variant="outline" className="border-[#4a90e2]">
            Hello
          </Button>
          <Button variant="outline" className="border-[#f876a9]">
            Hello
          </Button>
        </div>
      </section>
    </div>
  );
}
