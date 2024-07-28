import React from 'react';

interface UserPhotosPageProps {
    params: {
        id: number;
        photoId: number;
    };
}

export default function UserPhotosPage({
    params: { id, photoId },
}: UserPhotosPageProps) {
    return (
        <div>
            <p>User: {id}</p>
            <p>Photo: {photoId}</p>
        </div>
    );
}
