import { NextRequest, NextResponse } from 'next/server';
export { default } from 'next-auth/middleware';

export const config = {
    // *: zero or more
    // +: 1 or more
    // ?: 0 or 1
    matcher: ['/users/:id'],
};
