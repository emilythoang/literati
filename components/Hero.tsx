import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-hero bg-fixed bg-center bg-cover text-white bg-black/30 bg-blend-overlay p-8">
      <div className="text-center lg:w-5/12 w-full">
        <div className="flex flex-col my-4 gap-1 md:px-4 md:gap-3">
          <h1 className="text-4xl md:text-6xl font-semibold">Literati</h1>
          <h1 className="text-3xl md:text-5xl font-semibold">
            The ultimate companion for book lovers
          </h1>
        </div>
        <div className="flex flex-col mb-8 gap-3 leading-tight text-lg md:gap-1 md:text-2xl">
          <h2>Track books you've read.</h2>
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
