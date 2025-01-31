'use client'

import { Category, Product } from '@prisma/client'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

import IconButton from '@/components/ui/IconButton'
import { formatPrice } from '@/lib/utils'
import useCart from '@/hooks/useCart'

interface ProductCardProps {
  product: Product & {
    Category: Category
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cart = useCart()

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    cart.addItem(product)
  }

  return (
    <div className='group/card shadow-lg border bg-blue-500 hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full transform hover:scale-105'>
      <Link href={`/${product.storeId}/${product.slug}?productId=${product.id}`}>
        {/* Images and Actions */}
        <div className='aspect-square m-3 rounded-2xl bg-gray-100 relative overflow-hidden'>
          <Image
            // @ts-ignore
            src={product.images?.[0].url}
            fill
            sizes='200'
            // @ts-ignore
            alt={product.name}
            className='aspect-square object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110'
          />
        </div>
        <div className='px-4 space-y-3 pb-6'>
          <div className='space-y-1'>
            {/* Category */}
            <p className='text-sm text-white opacity-70'>{product.Category?.name}</p>
            {/* Product Name */}
            <p
              className='font-semibold text-white text-lg truncate hover:text-gray-200 group-hover/card:text-white transition-colors duration-300'
              title={product.name}
            >
              {product.name}
            </p>
            <Image alt='Stars' src='/icon/stars.svg' width={100} height={100} />
          </div>

          <div className='flex items-center justify-between'>
            {/* Price */}
            <div className='font-semibold text-white'>
              {/* @ts-expect-error */}
              {formatPrice(parseFloat(product.price))}
            </div>
            {/* Add to Cart Button */}
            <div className='flex justify-center group/icon'>
              <IconButton
                aria-label='add-to-cart'
                className='bg-blue-50 hover:bg-blue-100 p-2 rounded-full shadow-lg group-hover/icon:bg-yellow-500 transition-all duration-300'
                onClick={onAddToCart}
                icon={
                  <ShoppingCart
                    size={20}
                    className='text-blue-600 group-hover/icon:text-yellow-50 transition-all duration-300'
                  />
                }
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
