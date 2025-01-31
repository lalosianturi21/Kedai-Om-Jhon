import { NextResponse } from 'next/server';
import prisma from '@/lib/db'
import { z } from 'zod';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const { limit, page, category } = z
      .object({
        limit: z.string().optional(),
        page: z.string().optional(),
        category: z.string().optional(),
      })
      .parse({
        limit: url.searchParams.get('limit'),
        page: url.searchParams.get('page'),
        category: url.searchParams.get('category'),
      });

    const take = limit ? parseInt(limit) : 10;
    const skip = page ? (parseInt(page) - 1) * take : 0;

    const products = await prisma.product
      .findMany({
        where: category && category !== 'null' ? { categoryId: category } : {},
        take,
        skip,
        orderBy: { createdAt: 'desc' },
        include: { Category: true },
      })
      .catch((err) => {
        console.error('Database Error:', err);
        throw new Error('Database query failed');
      });

    return NextResponse.json(products);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 });
    }

    console.error(error);
    return new Response('Could not fetch more posts', { status: 500 });
  }
}
