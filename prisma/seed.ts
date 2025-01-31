const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const kebutuhanpokok = await prisma.category.create({
    data: {
      name: 'Kebutuhan Pokok',
      slug: 'kebutuhanpokok',
    },
  })
  const perabotan = await prisma.category.create({
    data: {
      name: 'Perabotan',
      slug: 'perabotan',
    },
  })
  const makananringan = await prisma.category.create({
    data: {
      name: 'Makanan Ringan',
      slug: 'makananringan',
    },
  })
  const minuman = await prisma.category.create({
    data: {
      name: 'Minuman',
      slug: 'minuman',
    },
  })

  console.log({ kebutuhanpokok, perabotan, makananringan, minuman })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
