import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-black/30 bg-hero bg-cover bg-fixed bg-center p-8 text-white bg-blend-overlay">
      <div className="w-full text-center lg:w-5/12">
        <div className="my-4 flex flex-col gap-1 md:gap-3 md:px-4">
          <h1 className="text-4xl font-semibold md:text-6xl">Literati</h1>
          <h1 className="text-3xl font-semibold md:text-5xl">
            The ultimate companion for book lovers
          </h1>
        </div>
        <div className="mb-8 flex flex-col gap-3 text-lg leading-tight md:gap-1 md:text-2xl">
          <h2>Track books you&apos;ve read.</h2>
          <h2>Discover your next great read.</h2>
          <h2>Elevate your reading experience.</h2>
        </div>
        <div className="flex justify-center">
          <Link
            href="/signin"
            className={buttonVariants({ variant: 'outline' })}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
