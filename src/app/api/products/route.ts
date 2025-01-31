import prisma from '@/lib/db';
import { z } from 'zod';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const { limit, page, category } = z
      .object({
        limit: z.string().default("10"),
        page: z.string().default("1"),
        category: z.string().optional(),
      })
      .parse({
        limit: url.searchParams.get("limit") ?? "10",
        page: url.searchParams.get("page") ?? "1",
        category: url.searchParams.get("category") ?? undefined,
      });

    const categoryValue = category === "null" ? undefined : category;

    const products = await prisma.product.findMany({
      where: categoryValue ? { categoryId: categoryValue } : {},
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Category: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }

    console.error(error);

    return new Response("Could not fetch more posts", { status: 500 });
  }
}
