import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="min-h-screen flex flex-col justify-between">
        <NavBar />
        <Hero />
      </div>
      <Features />
    </main>
  );
}
