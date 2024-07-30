import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
    // Fetch users in db.

    return NextResponse.json([
        { id: 1, name: 'Shane' },
        { id: 2, name: 'Mosh' },
    ]);
}
