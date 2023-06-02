import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      <div className="flex flex-1 flex-col items-center justify-center gap-8 ">
        <h1 className="text-5xl md:text-6xl font-semibold">Page Not Found</h1>
        <p className="text-3xl text-gray-600">
          Could not find requested resource
        </p>
        <Link href="/" className={buttonVariants({ variant: 'outline' })}>
          Go back to homepage <LuArrowRight />
        </Link>
      </div>
    </div>
  );
}
