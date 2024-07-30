import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';
import { FaSortAlphaDown, FaSortAlphaUpAlt } from 'react-icons/fa';

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
                        <div className='flex gap-4 items-center'>
                            Name
                            <Link href='?sortOption=name&sortOrder=asc'>
                                <FaSortAlphaDown />
                            </Link>
                            <Link href='?sortOption=name&sortOrder=desc'>
                                <FaSortAlphaUpAlt />
                            </Link>
                        </div>
                    </th>

                    <th>
                        <div className='flex gap-4 items-center'>
                            Email
                            <Link href='?sortOption=email&sortOrder=asc'>
                                <FaSortAlphaDown />
                            </Link>
                            <Link href='?sortOption=email&sortOrder=desc'>
                                <FaSortAlphaUpAlt />
                            </Link>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortUsers(sortOption, sortOrder, users).map((user) => (
                    <tr
                        key={user.id}
                        className='hover:bg-sky-200 hover:cursor-pointer'
                    >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
