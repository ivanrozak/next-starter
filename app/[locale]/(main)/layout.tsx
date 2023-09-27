import Navbar from '@/components/Navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto px-6">{children}</div>
    </>
  );
}
