import { LuLoader2 } from 'react-icons/lu';

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <p className="font-xl">Loading...</p>
      <LuLoader2 className="font-xl animate-spin" />
    </div>
  );
}
