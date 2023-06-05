'use client';
import NavBar from '@/components/NavBar';

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
        <div className="flex min-h-screen flex-col justify-between">
          <NavBar />
          <div className="flex flex-1 flex-col items-center justify-center gap-8 ">
            <h1 className="text-5xl font-semibold md:text-6xl">
              Something went wrong!
            </h1>
            <button onClick={() => reset()} className="text-3xl text-gray-600">
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
