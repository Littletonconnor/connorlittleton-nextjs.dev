export const metadata = {
  title: 'Connor Littleton - Recipes',
  description: 'A list of common web recipes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='pt-10'>{children}</div>;
}
