'use client';

import React from 'react';

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    return (
        <>
            <p>An unexpected error occured. {error.message}</p>
            <button
                className='btn'
                onClick={() => reset()}
            >
                Retry
            </button>
        </>
    );
}
