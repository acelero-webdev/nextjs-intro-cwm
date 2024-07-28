'use client';
import React from 'react';

export default function AddToCart() {
    return (
        <button
            className='btn btn-primary'
            onClick={() => console.log('running')}>
            Add to Cart
        </button>
    );
}
