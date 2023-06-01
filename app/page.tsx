import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
    </main>
  );
}
