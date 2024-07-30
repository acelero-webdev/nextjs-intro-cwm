import { NextRequest, NextResponse } from 'next/server';

interface Props {
    params: {
        id: number;
    };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
    // Fetch data from db.
    // If data is not found -> return 404
    if (id < 0 || id > 10) {
        return NextResponse.json(
            {
                error: 'User Not Found',
            },
            { status: 404 }
        );
    }

    // Else return data
    return NextResponse.json({
        id: 1,
        name: 'Shane',
    });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
    // Validate the request body
    const body = await request.json();

    // If invalid -> return 400 error
    if (!body.name) {
        return NextResponse.json(
            {
                error: 'You must provide a valid name for the updated user.',
            },
            {
                status: 400,
            }
        );
    }

    // Check to see if users exists
    // If invalid -> return 404 error
    if (id < 0 || id > 10) {
        return NextResponse.json(
            {
                error: 'User not found.',
            },
            {
                status: 404,
            }
        );
    }

    // Update the database
    return NextResponse.json({
        id: id,
        body: body.name,
    });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    // Fetch users
    // Check to see if the user exists.
    if (id < 0 || id > 10) {
        return NextResponse.json(
            {
                error: 'User not found.',
            },
            {
                status: 404,
            }
        );
    }

    // Delete the users
    // Return 200 response
    return NextResponse.json({});
}
