import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex items-center justify-center flex-1 bg-hero bg-fixed bg-center bg-cover text-white bg-black/30 bg-blend-overlay p-8">
      <div className="text-center lg:w-5/12 w-full">
        <h1 className="my-4 text-3xl md:text-5xl font-bold leading-tight text-white">
          Turn your designs into production-ready frontend
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Ship products 5-10x faster with your existing design tools, tech
          stacks & workflows!
        </p>
        <div className="flex justify-center mx-auto">
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
