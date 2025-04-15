const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const kebutuhanpokok = await prisma.category.upsert({
    where: { slug: 'kebutuhanpokok' },
    update: {},
    create: {
      name: 'Kebutuhan Pokok',
      slug: 'kebutuhanpokok',
    },
  });

  const perabotan = await prisma.category.upsert({
    where: { slug: 'perabotan' },
    update: {},
    create: {
      name: 'Perabotan',
      slug: 'perabotan',
    },
  });

  const makananringan = await prisma.category.upsert({
    where: { slug: 'makananringan' },
    update: {},
    create: {
      name: 'Makanan Ringan',
      slug: 'makananringan',
    },
  });

  const minuman = await prisma.category.upsert({
    where: { slug: 'minuman' },
    update: {},
    create: {
      name: 'Minuman',
      slug: 'minuman',
    },
  });

  console.log({ kebutuhanpokok, perabotan, makananringan, minuman });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
