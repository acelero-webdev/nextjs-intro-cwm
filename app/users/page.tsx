import React from 'react';
import UsersTable from './UsersTable';
import Link from 'next/link';

interface UserPageProps {
    searchParams: {
        sortOption: string;
        sortOrder: 'asc' | 'desc';
    };
}

export default function UserPage({
    searchParams: { sortOption, sortOrder },
}: UserPageProps) {
    return (
        <>
            <h1>Users</h1>
            <Link
                href='/users/new'
                className='btn'>
                New User
            </Link>
            <UsersTable
                sortOption={sortOption}
                sortOrder={sortOrder}
            />
        </>
    );
}
