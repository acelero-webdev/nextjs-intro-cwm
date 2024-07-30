import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
    // Fetch users in db.
    const users = await prisma.user.findMany();

    // Return data
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    // Validate the body
    const validation = schema.safeParse(body);

    // If invalid -> 404
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {
            status: 404,
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    // Ensure the user doesn't already exist.
    if (user) {
        return NextResponse.json(
            {
                error: 'A user with this email already exists',
            },
            {
                status: 400,
            }
        );
    }

    // Create the new user
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        },
    });

    // Send the new user back to the client
    return NextResponse.json(newUser, {
        status: 201,
    });
}
