import { api } from '@/constant/api';
import { useFetch } from '@/lib/fetchRequest';
import { getUsers } from '@/services/userServices';
import React from 'react';

interface User {
  id: number | undefined;
  name: string | undefined;
}

const HomePage = async () => {
  const res: User[] = await useFetch(api.users);
  return (
    <>
      <h1>Home Page</h1>
      <div>{new Date().toLocaleTimeString()}</div>
      {res?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default HomePage;

// const HomePage = async () => {
//   const res = await getUsers();
//   const users: User[] = res?.data || [];
//   return (
//     <>
//       <h1>Home Page</h1>
//       {users?.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </>
//   );
// };

// export default HomePage;
