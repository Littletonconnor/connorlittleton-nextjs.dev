import { Email, Github, Linkedin } from '@/lib/icons';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
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
      <main className='space-y-6 divide-y'>
        <article className='pt-6'>
          <h2 className='text-xl font-bold'>Posts</h2>
          <p className='text-slate-600'>
            Some things I&apos;ve learned over the years.
          </p>
          <ul className='my-3'>
            <li className='flex flex-col'>
              <Link className='font-medium underline' href='/blog/monorepo'>
                Exploring Monorepos
              </Link>
              <span className='text-slate-500'>
                A look into monorepos and how they can be used to improve
                developer productivity.
              </span>
            </li>
          </ul>
          <Link className='text-slate-800 underline' href='/blog'>
            See more
          </Link>
        </article>
        <article className='pt-6'>
          <h2 className='text-xl font-bold'>Projects</h2>
          <p className='text-slate-600'>Some Projects I&apos;ve worked on.</p>
          <ul className='my-3'>
            <li className='flex flex-col'>
              <a
                className='font-medium underline'
                href='https://github.com/Littletonconnor/connorlittleton.api'
              >
                connorlittleton.api
              </a>
              <span className='text-slate-500'>A JSONPlaceholder like api</span>
            </li>
          </ul>
          <Link className='text-slate-800 underline' href='/projects'>
            See more
          </Link>
        </article>
        <article className='pt-6'>
          <h2 className='text-xl font-bold'>Recipes</h2>
          <p className='text-slate-600'>A list of common web recipes.</p>
          <ul className='my-3'>
            <li className='flex flex-col'>
              <Link
                className='font-medium underline'
                href='/recipes/pagination'
              >
                Pagination
              </Link>
              <span className='text-slate-500'>
                A quick server rendered pagination example.
              </span>
            </li>
          </ul>
          <Link className='text-slate-800 underline' href='/projects'>
            See more
          </Link>
        </article>
      </main>
    </>
  );
}
