import React from 'react';
import Vercel from '@/public/vercel.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
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
            <Link href='/users'>Users</Link>
            <Link href='/admin'>Admin</Link>
        </nav>
    );
}
