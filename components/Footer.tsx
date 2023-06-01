import Link from 'next/link';
import { GiBookshelf } from 'react-icons/gi';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between p-8 md:px-12">
      <Link href="/" className="flex items-center justify-between gap-2">
        <GiBookshelf className="w-5 h-5" />
        <div className="text-gray-500 text-md">Literati</div>
      </Link>
      <Link href="www.github.com">
        <FaGithub className="w-5 h-5" />
      </Link>
    </footer>
  );
}
