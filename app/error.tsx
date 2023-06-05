'use client';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 ">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Something went wrong!
          </h1>
          <Button
            variant="ghost"
            onClick={() => reset()}
            className="text-xl text-gray-600"
          >
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
