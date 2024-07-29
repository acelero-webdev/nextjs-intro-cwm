'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function NewUserPage() {
    const router = useRouter();

    return (
        <button
            className='btn btn-primary'
            onClick={() => router.push('/users')}>
            Create
        </button>
    );
}
