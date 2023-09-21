import Link from 'next/link';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/company">Company</Link>
        <Link href="/doctor/3">Doctor</Link>
        <Link href="/download">Download</Link>
      </div>
      {children}
      <div>Footer main</div>
    </>
  );
}
