import Link from 'next/link';
import { GiBookshelf } from 'react-icons/gi';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mx-8 my-2 flex flex-row items-center justify-between md:my-4 lg:mx-12">
      <Link href="/" className="flex items-center justify-between gap-2">
        <GiBookshelf className="h-5 w-5" />
        <div className="text-md text-gray-500">Literati</div>
      </Link>
      <Link href="https://github.com/emilythoang/literati">
        <FaGithub className="h-5 w-5" />
      </Link>
    </footer>
  );
}
