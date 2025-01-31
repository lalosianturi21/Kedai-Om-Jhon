import { Category } from '@prisma/client'

export const INFINITE_SCROLL_LIMIT = 8

export const ORDER_INFINITE_SCROLL_LIMIT = 3

export const categories: Category[] = [
  {
    name: 'Kebutuhan Pokok',
    slug: 'kebutuhanpokok',
  },
  {
    name: 'Perabotan',
    slug: 'perabotan',
  },
  {
    name: 'Makanan Ringan',
    slug: 'makananringan',
  },
  {
    name: 'Minuman',
    slug: 'minuman',
  },
]
