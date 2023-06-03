export const metadata = {
  title: 'Connor Littleton - Blog',
  description: 'A list of things Ive learned over the years',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='pt-10'>{children}</div>;
}
