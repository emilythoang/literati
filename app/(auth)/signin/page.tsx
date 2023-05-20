import { Button } from '@/components/ui/button';
import { FaGoogle, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import bookshelf from '/public/bookshelf.jpg';

export function ButtonWithIcon({ provider }: { provider: string }) {
  const renderIcon = () => {
    switch (provider) {
      case 'Google':
        return <FaGoogle className="mr-2 h-4 w-4" />;
      case 'Facebook':
        return <FaFacebookSquare className="mr-2 h-4 w-4" />;
      case 'Twitter':
        return <FaTwitter className="mr-2 h-4 w-4" />;
    }
  };
  return (
    <Button variant="outline" size="lg">
      {renderIcon()} <span className="text-lg">Sign in with {provider}</span>
    </Button>
  );
}

export default async function Page() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center md:max-w-none md:grid-cols-2 md:px-0">
      <div className="hidden h-full relative overflow-hidden md:block">
        <Image
          src={bookshelf}
          alt="Bookshelf"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex-col mx-auto flex w-full justify-center space-y-6 text-center">
        <h1 className="text-3xl font-bold ">Welcome!</h1>
        <div className="flex-col mx-auto flex w-full justify-center space-y-6 md:w-[350px]">
          <ButtonWithIcon provider="Google" />
          <ButtonWithIcon provider="Facebook" />
          <ButtonWithIcon provider="Twitter" />
        </div>
      </div>
    </div>
  );
}
