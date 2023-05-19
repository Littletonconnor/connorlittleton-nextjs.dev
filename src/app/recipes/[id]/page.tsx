import { Mdx } from '@/lib/mdx';
import { allRecipes } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

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
  const tableData = getTableData(Number(searchParams.offset) ?? 0);
  console.log('allRecipe', allRecipes);
  const recipe = allRecipes.find((recipe) => recipe.slug === params.id);

  if (!recipe) {
    return notFound();
  }

  return (
    <section className='flex flex-col space-y-4'>
      <h2 className='text-2xl font-bold'>{recipe.title}</h2>
      <time>{new Date(recipe.date).toLocaleDateString()}</time>
      <Mdx code={recipe.body.code} />
    </section>
  );

  // return (
  // <div className='flex flex-col space-y-4'>
  //   <h2 className='text-2xl font-bold'>Pagination</h2>
  //   <div className='relative overflow-x-auto border border-slate-200 shadow-md sm:rounded-lg'>
  //     <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
  //       <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
  //         <tr>
  //           <th scope='col' className='px-6 py-3'>
  //             Id
  //           </th>
  //           <th scope='col' className='px-6 py-3'>
  //             Name
  //           </th>
  //           <th scope='col' className='px-6 py-3'>
  //             email
  //           </th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {tableData.map((user) => (
  //           <tr
  //             key={user.id}
  //             className='border-b bg-white dark:border-gray-700 dark:bg-gray-900'
  //           >
  //             <th
  //               scope='row'
  //               className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
  //             >
  //               {user.id}
  //             </th>
  //             <td className='px-6 py-4'>{user.name}</td>
  //             <td className='px-6 py-4'>{user.email}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // </div>
  // );
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
