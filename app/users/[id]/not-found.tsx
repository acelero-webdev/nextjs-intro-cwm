import React from 'react';

interface UserDetailsPageProps {
    params: {
        id: number;
    };
}

export default function UserNotFound() {
    return <div>Unable to find a user with the id.</div>;
}
