const pageSize = 5;
const totalUsers = 100;
const tableData = generateUsers(100);

export function PaginationDemo() {
  const searchParams = new URLSearchParams(window.location.search);
  const offset = Number(searchParams.get('offset') || 1);

  return (
    <div className='relative overflow-x-auto border border-slate-200 shadow-md sm:rounded-lg'>
      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Id
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              email
            </th>
          </tr>
        </thead>
        <tbody>
          {getTableData(offset).map((user) => (
            <tr
              key={user.id}
              className='border-b bg-white dark:border-gray-700 dark:bg-gray-900'
            >
              <th
                scope='row'
                className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
              >
                {user.id}
              </th>
              <td className='px-6 py-4'>{user.name}</td>
              <td className='px-6 py-4'>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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

function getTableData(offset: number) {
  const startIndex = (offset > 0 ? offset - 1 : 0) * pageSize;

  if (startIndex >= totalUsers) {
    return tableData.slice(totalUsers - pageSize, totalUsers);
  }

  return tableData.slice(startIndex, startIndex + pageSize);
}
