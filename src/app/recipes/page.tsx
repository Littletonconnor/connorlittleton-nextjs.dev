import Image from 'next/image';
import Link from 'next/link';

import { recipes } from './constants';

export default function Recipes() {
  return (
    <div>
      <h1 className='text-3xl font-extrabold'>Recipes</h1>
      <p className='text-lg text-slate-600'>
        Code snippets for common user interfaces.
      </p>
      <div className='mt-12 grid grid-cols-2 gap-x-4 gap-y-8'>
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            className='group'
            href={`/recipes/${recipe.link}`}
          >
            <div className='relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-200/20 backdrop-blur-xl transition group-hover:border-gray-300'>
              {recipe.description ? (
                <div className='space-y-1 text-center'>
                  <p className='text-lg font-bold text-slate-600'>
                    {recipe.name}
                  </p>
                  <p className='text-sm font-semibold text-slate-500'>
                    {recipe.description}
                  </p>
                </div>
              ) : (
                <span className='text-sm font-medium italic text-slate-600'>
                  Coming Soon
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// not too sure what this is doing.
export const dynamic = 'force-dynamic';
