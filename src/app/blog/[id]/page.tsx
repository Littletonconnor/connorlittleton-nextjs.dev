import { notFound } from 'next/navigation';
import { allRecipes } from 'contentlayer/generated';

import { Mdx } from '@/lib/mdx';

export async function generateStaticParams() {
  return allRecipes.map((recipe) => {
    return {
      slug: recipe.slug,
    };
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const recipe = allRecipes.find((recipe) => recipe.slug === params.id);

  if (!recipe) {
    return notFound();
  }

  return (
    <section className='flex flex-col'>
      <h2 className='text-2xl font-bold'>{recipe.title}</h2>
      <time className='pb-4 pt-2 text-slate-600'>
        {new Date(recipe.date).toLocaleDateString()}
      </time>
      <Mdx code={recipe.body.code} />
    </section>
  );
}
