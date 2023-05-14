import Link from 'next/link';
import { Inter } from 'next/font/google';

import './globals.css';
import './reset.css';
import { Email, Github, Linkedin } from '@/lib/icons';

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
      <body className={inter.className}>
        <header className='container mx-auto pt-12'>
          <nav className='flex items-center justify-between border-b py-4'>
            <Link href='/' className='text-lg font-bold'>
              Connor Littleton
            </Link>
            <div className='flex items-center space-x-2 text-slate-800'>
              <a className='h-6 w-6' href='https://github.com/Littletonconnor'>
                <Github />
              </a>
              <a className='h-6 w-6' href='https://github.com/Littletonconnor'>
                <Linkedin />
              </a>
              <a className='h-6 w-6' href='https://github.com/Littletonconnor'>
                <Email />
              </a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
