import { notFound } from 'next/navigation';
import { allRecipes } from 'contentlayer/generated';

import { Mdx } from '@/lib/mdx';

export async function getStaticParams() {
  return allRecipes.map((recipe) => {
    return {
      slug: recipe.slug,
    };
  });
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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
      <Mdx code={recipe.body.code} searchParams={searchParams} />
    </section>
  );
}

function generateUsers(n: number) {
  let tableData = [];

  for (let i = 1; i <= n; i++) {
    tableData.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
    });
  }

  return tableData;
}

const pageSize = 5;
const totalUsers = 100;
const tableData = generateUsers(100);

function getTableData(offset: number) {
  const startIndex = (offset > 0 ? offset - 1 : 0) * pageSize;

  if (startIndex >= totalUsers) {
    return tableData.slice(totalUsers - pageSize, totalUsers);
  }

  return tableData.slice(startIndex, startIndex + pageSize);
}
