import Link from 'next/link';
import Image from 'next/image';
// import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs/app-beta';

// import { getServerSession } from 'next-auth/next';
// import { authOptions } from 'pages/api/auth/[...nextauth].js';

export default async function NavBar() {
  // const session = await getServerSession(authOptions);
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
        <li>{/* <SignInButton /> */}</li>
      </ul>
    </nav>
  );
}
