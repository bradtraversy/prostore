import { PrismaClient } from '@prisma/client';


async function main() {
 
  const prisma = new PrismaClient();

// Grouping products by category
const groupedProducts = await prisma.product.groupBy({
  by: ['category'],
  _count: true, // Counts the number of products in each category
});

// Logging the grouped data
console.log('Grouped Products:', groupedProducts);

// Iterate over groupedProducts
for (const group of groupedProducts) {
  console.log(`Category: ${group.category}, Count: ${group._count}`);
}


}

main();