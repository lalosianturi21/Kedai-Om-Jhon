import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

import PopularProducts from '@/components/PopularProducts'
import PopularProductsSkeleton from '@/components/skeletons/PopularProductsSkeleton'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const Products = async () => {
  return (
    <section
      id='products'
      aria-labelledby='product-heading'
      className='space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24'
    >
      <div className='flex items-end justify-between'>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-3xl md:text-5xl text-start text-blue-600 font-bold leading-[1.1]'>
            Produk Terpopuler
          </h2>
          <h3 className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            Temukan berbagai produk makanan ringan, kebutuhan pokok, dan perabotan rumah tangga yang kami tawarkan
          </h3>
        </div>
        <a
          href='/products'
          className='hidden md:flex gap-1 text-blue-700 hover:translate-x-1 hover:text-blue-600 transition-all'
        >
          Belanja Koleksi <ArrowRight />
        </a>
      </div>
      <Suspense fallback={<PopularProductsSkeleton />}>
        <PopularProducts />
      </Suspense>
      <Link
        href='/products'
        className={cn(
          buttonVariants(),
          'mx-auto bg-blue-700 flex w-fit hover:before:-translate-x-48',
        )}
      >
        Lihat Semua Produk
        <ArrowRight className='ml-2 h-4 w-4' aria-hidden='true' />
      </Link>
    </section>
  )
}

export default Products
