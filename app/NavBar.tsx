'use client';

import React from 'react';
import Vercel from '@/public/vercel.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function NavBar() {
    const { status, data: session } = useSession();

    if (status === 'loading') return null;

    return (
        <nav className='navbar gap-4 bg-slate-200 p-5'>
            <div className='flex-1'>
                <Link
                    href='/'
                    className='btn btn-ghost text-xl'>
                    <Image
                        alt='homepage logo'
                        src={Vercel}
                        height={80}
                        width={80}
                    />
                </Link>
            </div>
            <div className='flex gap-6 mr-3'>
                <Link href='/users'>Users</Link>
                <Link href='/admin'>Admin</Link>
                {status === 'authenticated' && (
                    <div className='flex gap-6'>
                        <p>{session.user!.name}</p>
                        <Link href='/api/auth/signout'>Logout</Link>
                    </div>
                )}
                {status === 'unauthenticated' && (
                    <Link href='/api/auth/signin'>Login</Link>
                )}
            </div>
        </nav>
    );
}
