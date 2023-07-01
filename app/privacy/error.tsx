'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 ">
      <h1 className="text-3xl font-semibold md:text-4xl">
        Something went wrong!
      </h1>
      <Button
        variant="ghost"
        onClick={() => reset()}
        className=" text-gray-600"
      >
        Try again
      </Button>
    </div>
  );
}
