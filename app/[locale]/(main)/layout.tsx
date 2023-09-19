export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Header main</div>
      {children}
      <div>Footer main</div>
    </>
  );
}
