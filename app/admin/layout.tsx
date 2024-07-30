import React from 'react';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className='flex'>
            <aside className='bg-slate-500 p-5 mr-5'>Admin Sidebar</aside>
            <div>{children}</div>
        </div>
    );
}
