import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default async function UserPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {
            revalidate: 10,
        },
    });
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <table className='table  table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className='hover:bg-sky-200 hover:cursor-pointer'>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
