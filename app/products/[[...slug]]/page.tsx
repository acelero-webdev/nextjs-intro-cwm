import React from 'react';

interface ProductPageProps {
    params: {
        slug: string[];
    };
    searchParams: {
        sortOrder: string;
    };
}

export default function ProductPage({
    params: { slug },
    searchParams: { sortOrder },
}: ProductPageProps) {
    return (
        <div>
            <h1>ProductsPage</h1>
            <p>{slug}</p>
            <p>{sortOrder}</p>
        </div>
    );
}
