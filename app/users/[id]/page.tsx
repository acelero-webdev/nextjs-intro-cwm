import React from 'react';

interface UserDetailsPageProps {
    params: {
        id: number;
    };
}

export default function UserDetailsPage({
    params: { id },
}: UserDetailsPageProps) {
    return <div>{id}</div>;
}
