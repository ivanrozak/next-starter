import React from 'react';

interface User {
  id: number;
  name: string;
}

const LoginPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return (
    <>
      <h1>Login Page with async</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default LoginPage;
