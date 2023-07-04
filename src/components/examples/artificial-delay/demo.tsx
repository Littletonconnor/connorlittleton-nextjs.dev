import { FormEvent, useState } from 'react';

function ArtificialDelayExample() {
  const [isSaving, setIsSaving] = useState(false);
  const [range, setRange] = useState(500);
  const [artificialDelay, setArtificialDelay] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);

    await minDelay(signup(), artificialDelay ? range : 100);

    setIsSaving(false);
  }

  async function signup() {
    await sleep(artificialDelay ? range : 100);
  }

  return (
    <div className='flex w-full shrink-0 flex-col justify-center space-y-2 lg:w-3/4'>
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
      <div className='flex w-full items-center space-x-6 text-xs'>
        <label className='group flex shrink-0 items-center'>
          <input
            className='mr-2'
            onChange={() => setArtificialDelay(!artificialDelay)}
            type='checkbox'
          />
          <span className='font-medium text-slate-900'>Artificial delay</span>
        </label>
        <fieldset className='mt-6 shrink-0 disabled:opacity-50 sm:mt-0'>
          <label className='flex flex-col text-sm sm:flex-row sm:items-center'>
            <input
              type='range'
              min='250'
              step='50'
              max='2000'
              onChange={(e) => setRange(e.currentTarget.valueAsNumber)}
              className='mt-1 max-w-xs'
              value={range}
            />
            <span className='order-first mb-2 font-medium text-slate-900 sm:order-1 sm:mb-0 sm:ml-2'>
              Minimum delay: {range}ms
            </span>
          </label>
        </fieldset>
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
