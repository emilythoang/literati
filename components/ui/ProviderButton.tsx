'use client';

import { FaGoogle, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export function ProviderButton({ id, name }: { id: string; name: string }) {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Google':
        return <FaGoogle className="mr-2 h-4 w-4" />;
      case 'Facebook':
        return <FaFacebookSquare className="mr-2 h-4 w-4" />;
      case 'Twitter':
        return <FaTwitter className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <Button variant="outline" size="lg" key={name} onClick={() => signIn(id)}>
      {renderIcon(name)}
      <span className="text-lg">Sign in with {name}</span>
    </Button>
  );
}
