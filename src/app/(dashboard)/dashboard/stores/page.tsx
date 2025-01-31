import Link from 'next/link'

import { Heading } from '@/components/Heading'
import { StoreCard } from '@/components/cards/StoreCard'
import { buttonVariants } from '@/components/ui/Button'
import { Separator } from '@/components/ui/Separator'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'

const StorePage = async () => {
  const session = await getAuthSession()

  // Fetch the first user (based on their ID) from the database
  const firstUser = await prisma.user.findFirst({
    orderBy: {
      id: 'asc', // Sort by the user ID in ascending order to get the first user
    },
  })

  // Check if the current user is the first user based on their ID
  if (!session?.user || session.user.id !== firstUser?.id) {
    redirect('/dashboard/orders') // Redirect to a different page if the user is not the first one
  }

  const stores = await prisma.store.findMany({
    where: {
      userId: session?.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title='Stores' description='Manage your stores' />
        {stores.length > 0 && (
          <Link className={buttonVariants()} href='/dashboard/stores/new'>
            Create store
          </Link>
        )}
      </div>
      <Separator className='my-4' />
      {stores.length > 0 ? (
        <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stores.map((store) => (
            <StoreCard key={store.id} store={store!} />
          ))}
        </section>
      ) : (
        <section className='flex h-[50vh] text-center gap-4 flex-col items-center justify-center'>
        <h2 className='font-semibold text-2xl'>You don&apos;t have any store</h2>  {/* Escape the single quote */}
        <Link className={buttonVariants()} href='/dashboard/stores/new'>
          Create a new store
        </Link>
      </section>      
      )}
    </>
  )
}

export default StorePage
