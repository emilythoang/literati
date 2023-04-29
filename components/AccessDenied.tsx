import Link from 'next/link';

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>You must be signed in to view this page</p>
      <Link href="/api/auth/signin">Sign In</Link>
    </>
  );
}
