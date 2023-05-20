import Link from 'next/link';

import { recipes } from './constants';

export default function Recipes() {
  return (
    <div>
      <h1 className='text-3xl font-extrabold'>Recipes</h1>
      <p className='text-lg text-slate-600'>
        Code snippets for common user interfaces.
      </p>
      <div className='mt-12 grid grid-cols-2 gap-x-4 gap-y-12'>
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            className='group'
            href={`/recipes/${recipe.link}`}
          >
            <div className='flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-200/20 backdrop-blur-xl transition group-hover:border-gray-300'></div>
            <p className='mt-3 text-sm font-medium text-slate-900'>
              {recipe.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
