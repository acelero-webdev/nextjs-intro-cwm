'use client';

import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}

export default function Upload() {
    const [publicId, setPublicId] = useState('');

    return (
        <>
            <CldUploadWidget
                uploadPreset='yre3zzjx'
                options={{
                    sources: ['local', 'camera'],
                    maxFiles: 5,
                    styles: {
                        palette: {
                            window: '#F5F5F5',
                            sourceBg: '#FFFFFF',
                            windowBorder: '#90a0b3',
                            tabIcon: '#0094c7',
                            inactiveTabIcon: '#69778A',
                            menuIcons: '#0094C7',
                            link: '#53ad9d',
                            action: '#8F5DA5',
                            inProgress: '#0194c7',
                            complete: '#53ad9d',
                            error: '#c43737',
                            textDark: '#000000',
                            textLight: '#FFFFFF',
                        },
                        fonts: {
                            default: null,
                            "'Poppins', sans-serif": {
                                url: 'https://fonts.googleapis.com/css?family=Poppins',
                                active: true,
                            },
                        },
                    },
                }}
                onSuccess={(result, { widget }) => {
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id);
                }}>
                {({ open }) => {
                    return (
                        <button
                            className='btn btn-primary'
                            onClick={() => open()}>
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>
            {publicId && (
                <CldImage
                    src={publicId}
                    width={270}
                    height={180}
                    alt='coffee image'
                />
            )}
        </>
    );
}
