import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row justify-between">
      <div className="text-gray-500 text-xs">
        &copy;2023 Literati. All rights reserved.
      </div>
      <ul className="flex flex-row justify-evenly">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/discover">Discover</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </div>
  );
}
