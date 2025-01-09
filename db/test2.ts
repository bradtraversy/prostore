import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Sets up WebSocket communication for Neon
neonConfig.webSocketConstructor = ws;


// prostore-pg_proxy-1 = 172.18.0.6
//neonConfig.wsProxy =  `prostore-pg_proxy-1:80/v1`;
// Disable all authentication and encryption
neonConfig.useSecureWebSocket = false;
//neonConfig.pipelineTLS = false;
//neonConfig.pipelineConnect = false;
const connectionString = `${process.env.DATABASE_URL}`;

console.log("dddd");
console.log(`${process.env.DATABASE_URL}`);

// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
const pool = new Pool({ connectionString });

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon(pool);

// Creates an instance of PrismaClient with the custom adapter
export const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Connected to the database successfully.');
    console.log(`${process.env.DATABASE_URL}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

async function main2() {

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

// Initialize the application
(async () => {
  await main();
  await main2();
})();



