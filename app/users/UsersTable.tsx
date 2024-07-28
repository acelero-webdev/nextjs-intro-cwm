import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersTableProps {
    sortOption: string;
    sortOrder: 'asc' | 'desc';
}

export default async function UsersTable({
    sortOption = 'name',
    sortOrder = 'asc',
}: UsersTableProps) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {
            revalidate: 10,
        },
    });
    const users: User[] = await res.json();

    const sortUsers = (
        sortOption: string,
        sortOrder: 'asc' | 'desc',
        users: User[]
    ): User[] => {
        if (sortOption.toLowerCase() === 'name') {
            if (sortOrder === 'asc') {
                return sort(users).asc((u) => u.name);
            }
            return sort(users).desc((u) => u.name);
        } else if (sortOption.toLowerCase() === 'email') {
            if (sortOrder === 'asc') {
                return sort(users).asc((u) => u.email);
            }
            return sort(users).desc((u) => u.email);
        }

        return users;
    };

    return (
        <table className='table  table-bordered'>
            <thead>
                <tr>
                    <th>
                        <Link href='?sortOption=name&sortOrder=asc'>Name</Link>
                    </th>

                    <th>
                        <Link href='?sortOption=email&sortOrder=asc'>
                            Email
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortUsers(sortOption, sortOrder, users).map((user) => (
                    <tr
                        key={user.id}
                        className='hover:bg-sky-200 hover:cursor-pointer'>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
