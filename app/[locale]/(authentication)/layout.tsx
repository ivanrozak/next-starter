import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Header auth</div>
      {children}
      <div>Footer auth</div>
    </>
  );
}
