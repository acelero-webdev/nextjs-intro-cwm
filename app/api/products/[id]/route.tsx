import { NextRequest, NextResponse } from 'next/server';
import productSchema from '../schema';

interface Props {
    params: {
        id: number;
    };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
    if (id < 0 || id > 10) {
        return NextResponse.json(
            {
                error: 'Product not found.',
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.json({
        id: 1,
        name: 'Milk',
        price: 3.5,
    });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
    // Validate the body
    const body = await request.json();

    const validation = productSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {
            status: 400,
        });

    // Validate the id
    if (id < 0 || id > 10) {
        return NextResponse.json(
            {
                error: 'Product not found.',
            },
            {
                status: 404,
            }
        );
    }

    // Return response
    return NextResponse.json({
        id,
        name: body.name,
        price: body.price,
    });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    // Validate the id
    if (id < 0 || id > 10) {
        return NextResponse.json(
            {
                error: 'Product not found.',
            },
            {
                status: 404,
            }
        );
    }

    // Delete user in db

    // Send response
    return NextResponse.json({});
}
