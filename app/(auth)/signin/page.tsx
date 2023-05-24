import Image from 'next/image';
import bookshelf from '/public/bookshelf.jpg';
import { getProviders } from 'next-auth/react';
import { ProviderButton } from '@/components/ui/ProviderButton';

export default async function Page() {
  const providers = await getProviders();
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
          {providers &&
            Object.values(providers).map((provider) => (
              <ProviderButton
                key={provider.name}
                id={provider.id}
                name={provider.name}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
