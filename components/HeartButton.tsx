// 'use client';

// import { useState } from 'react';
// import { useSession } from 'next-auth/react';
// import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
// import toast, { Toaster } from 'react-hot-toast';
// import { BookData } from '@/types';
// export default function HeartButton({ book }: { book: BookData }) {
//   const [liked, setLike] = useState(false);
//   const { data: session } = useSession();
//   const handleClick = async () => {
//     if (!session) {
//       toast.error('You must be signed in to add a favorite');
//     } else {
//       setLike(!liked);
//       try {
//         console.log(`book in heartButton is ${book}`);
//         if (liked) {
//           await fetch('/api/favorites', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(book),
//           });
//         } else {
//           await fetch('/api/favorites', {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(book),
//           });
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };
//   return (
//     <>
//       <Toaster />
//       <button onClick={handleClick}>
//         {liked ? <VscHeartFilled /> : <VscHeart />}
//       </button>
//     </>
//   );
// }
