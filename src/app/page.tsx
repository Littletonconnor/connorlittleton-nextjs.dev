import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className='space-y-6 divide-y'>
        <article className='pt-6'>
          <h2 className='text-2xl font-bold'>Posts</h2>
          <p className='text-slate-600'>
            Some things I&apos;ve learned over the years.
          </p>
          <ul className='my-3'>
            <li className='flex flex-col'>
              <Link className='font-medium underline' href='/blog'>
                Exploring Monorepos
              </Link>
              <span className='text-slate-600'>
                A look into monorepos and how they can be used to improve
                developer productivity.
              </span>
            </li>
          </ul>
          <Link className='text-slate-900 underline' href='/blog'>
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
              <span className='text-slate-600'>A JSONPlaceholder like api</span>
            </li>
          </ul>
          <Link className='text-slate-900 underline' href='/projects'>
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
              <span className='text-slate-600'>
                A quick server rendered pagination example.
              </span>
            </li>
          </ul>
          <Link className='text-slate-900 underline' href='/recipes'>
            See more
          </Link>
        </article>
      </main>
    </>
  );
}
