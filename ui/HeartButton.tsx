'use client';
import { BookData } from '@/types';
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';
// import { useSession } from 'next-auth/react';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import toast, { Toaster } from 'react-hot-toast';

export default function HeartButton({ book }: { book: BookData }) {
  const [liked, setLike] = useState(false);
  // const { data: session } = useSession();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const handleClick = async () => {
    // if (!session) {
    //   toast.error('You must be signed in to add a favorite');
    // } else {
    try {
      // const user = session.user.id;
      console.log(`is book liked ${liked}`);
      console.log(`book in heartButton is ${JSON.stringify(book)}`);
      if (!liked) {
        await fetch('/api/books', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(book),
        });
        // await fetch('/api/favorites', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ user: user, ...book }),
        // });
      } else {
        // await fetch('/api/favorites', {
        //   method: 'DELETE',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ user: user, ...book }),
        // });
      }

      setLike(!liked);
      console.log(`is book liked ${liked}`);
    } catch (error) {
      console.error(error);
    }
    // }
  };
  return (
    <>
      <Toaster />
      <button onClick={handleClick}>
        {liked ? <VscHeartFilled /> : <VscHeart />}
      </button>
    </>
  );
}
