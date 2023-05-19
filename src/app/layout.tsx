import { Inter } from 'next/font/google';
import { classnames } from '@/lib/utils';

import './globals.css';
import './reset.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Connor Littleton - Software Engineer',
  description:
    'Connor Littleton is a software engineer based in the United States.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={classnames('container mx-auto pt-12', inter.className)}>
        {children}
      </body>
    </html>
  );
}
