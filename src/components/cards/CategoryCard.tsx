import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import prisma from '@/lib/db'

interface CategoryCardProps {
  category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = async ({ category }) => {
  const products = await prisma.product.count({
    where: {
      categoryId: category.slug,
    },
  })

  return (
    <Link href={`/products?category=${category.slug}`}>
      <Card className='relative h-full w-full overflow-hidden rounded-lg bg-blue-500 transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
        <CardHeader className='p-4'>
          <div className='flex justify-center items-center bg-white rounded-full p-2'>
            <Image
              src={`/icon/${category.slug}.png`}
              alt={category.name}
              width={140}
              height={140}
              className='transition-all duration-300 transform group-hover:scale-110'
            />
          </div>
        </CardHeader>
        <CardContent className='space-y-2 p-4'>
          <CardTitle className='capitalize text-white text-xl font-semibold group-hover:text-gray-100'>
            {category.name}
          </CardTitle>
          <CardDescription className='text-white opacity-80 group-hover:opacity-100'>
            {products} Products
          </CardDescription>
        </CardContent>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
      </Card>
    </Link>
  )
}

export default CategoryCard
