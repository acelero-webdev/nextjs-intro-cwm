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
