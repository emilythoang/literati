import NavBar from '@/components/NavBar';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen ">
      <NavBar />
      {children}
    </section>
  );
}
