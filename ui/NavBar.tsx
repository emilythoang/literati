import Link from 'next/link';
import User from './User';

export default function NavBar() {
  return (
    <nav>
      <ul className="flex">
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
          <User />
        </li>
      </ul>
    </nav>
  );
}
