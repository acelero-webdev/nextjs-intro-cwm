import { NextRequest, NextResponse } from 'next/server';
import productSchema from './schema';
import prisma from '../../../prisma/client';

export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
    // Validate the body
    const body = await request.json();
    const validation = productSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    // Create the object in db
    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
        },
    });

    // Send Response
    return NextResponse.json(newProduct, { status: 201 });
}
