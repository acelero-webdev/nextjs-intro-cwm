import { notFound } from 'next/navigation';
import React from 'react';

interface UserDetailsPageProps {
    params: {
        id: number;
    };
}

export default function UserDetailsPage({
    params: { id },
}: UserDetailsPageProps) {
    if (id < 0 || id > 10) notFound();

    return <div>{id}</div>;
}
