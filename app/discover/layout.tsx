import NavBar from '@/components/NavBar';

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <NavBar />
      {children}
    </section>
  );
}
