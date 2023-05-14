export default function Home() {
  return (
    <main className='container mx-auto space-y-6 divide-y'>
      <article className='pt-6'>
        <div className='space-y-1'>
          <h2 className='text-xl font-bold'>Posts</h2>
          <p className='text-slate-500'>
            Some things I&apos;ve learned over the years.
          </p>
        </div>
      </article>
      <article className='pt-6'>
        <h2 className='text-xl font-bold'>Projects</h2>
        <p className='text-slate-500'>Some Projects I&apos;ve worked on.</p>
      </article>
      <article className='pt-6'>
        <h2 className='text-xl font-bold'>What I use</h2>
        <p className='text-slate-500'>A list of apps I use on a daily basis.</p>
      </article>
    </main>
  );
}
