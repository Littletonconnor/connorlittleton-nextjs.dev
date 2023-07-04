import { FormEvent, useState } from 'react';

function ArtificialDelayExample() {
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.entries(formData);

    await minDelay(signup(data), 1000);

    setIsSaving(false);
  }

  async function signup(email: [string, any][]) {
    await sleep(500);
  }

  return (
    <div className='flex w-full shrink-0 flex-col justify-center lg:w-2/3'>
      <p className='text-2xl font-bold text-slate-700 lg:text-3xl'>
        Sign up for our newsletter
      </p>
      <p className='mt-4 text-sm text-slate-600'>
        Get notified of new product updates, delivered straight to your inbox.
        Sent weekly.
      </p>
      <div className='mt-4 flex w-full'>
        <form className='flex w-full gap-2' onSubmit={handleSubmit}>
          <input
            className='flex-auto rounded-md border border-slate-200 px-2 text-sm/6'
            type='text'
            name='email'
          />
          <button className='flex items-center justify-center whitespace-nowrap rounded-md bg-slate-200 p-2 text-sm font-semibold'>
            {isSaving ? 'Saving...' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
}

async function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function minDelay<T>(promise: Promise<T>, ms: number) {
  const [p] = await Promise.all([promise, sleep(ms)]);

  return p;
}

export { ArtificialDelayExample };
