import React from 'react';
import UsersTable from './UsersTable';

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
            <UsersTable
                sortOption={sortOption}
                sortOrder={sortOrder}
            />
        </>
    );
}
