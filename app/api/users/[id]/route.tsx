import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

interface Props {
    params: {
        id: string;
    };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
    // Find the user with the given id.
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });

    // If the user doesn't exists return an error.
    if (!user) {
        return NextResponse.json(
            {
                error: 'User Not Found',
            },
            { status: 404 }
        );
    }

    // Else return data
    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
    // Validate the request body
    const body = await request.json();

    const validation = schema.safeParse(body);

    // If invalid -> return 400 error
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {
            status: 400,
        });
    }

    // Check to see if users exists
    // If invalid -> return 404 error
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });

    if (!user) {
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
    const updatedUser = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            name: body.name,
            email: body.email,
        },
    });

    return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    // Check to see if the user exists.
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });

    if (!user) {
        return NextResponse.json(
            {
                error: 'User not found.',
            },
            {
                status: 404,
            }
        );
    }

    // Delete the user
    await prisma.user.delete({
        where: {
            id: user.id,
        },
    });

    // Return 200 response
    return NextResponse.json({});
}
