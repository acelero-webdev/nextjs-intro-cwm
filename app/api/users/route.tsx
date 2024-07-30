import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
    // Fetch users in db.

    // Return data
    return NextResponse.json([
        { id: 1, name: 'Shane' },
        { id: 2, name: 'Mosh' },
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    // Validate the body
    // If invalid -> 404
    if (!body.name) {
        return NextResponse.json(
            {
                error: 'Name is required.',
            },
            {
                status: 404,
            }
        );
    }

    // Else
    return NextResponse.json(
        {
            id: 3,
            name: body.name,
        },
        {
            status: 201,
        }
    );
}
