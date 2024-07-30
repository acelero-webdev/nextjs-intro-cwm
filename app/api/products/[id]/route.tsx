import { NextRequest, NextResponse } from 'next/server';
import productSchema from '../schema';
import prisma from '@/prisma/client';

interface Props {
    params: {
        id: string;
    };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
    // See if the product exists.
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!product) {
        return NextResponse.json(
            {
                error: 'Product not found.',
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
    // Validate the body
    const body = await request.json();

    const validation = productSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {
            status: 400,
        });

    // Ensure the product exists.
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!product) {
        return NextResponse.json(
            {
                error: 'Product not found.',
            },
            {
                status: 404,
            }
        );
    }

    // Update the database.
    const updatedProduct = await prisma.product.update({
        where: {
            id: product.id,
        },
        data: {
            name: body.name,
            price: body.price,
        },
    });

    // Return response
    return NextResponse.json(updatedProduct);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    // Validate the id
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!product) {
        return NextResponse.json(
            {
                error: 'Product not found.',
            },
            {
                status: 404,
            }
        );
    }

    // Delete product in db
    await prisma.product.delete({
        where: {
            id: parseInt(id),
        },
    });

    // Send response
    return NextResponse.json({});
}
