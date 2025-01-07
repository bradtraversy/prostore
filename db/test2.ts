
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Sets up WebSocket communication for Neon
neonConfig.webSocketConstructor = ws;



// Database connection details
const pool = new Pool({
  user: 'devtedsuser',         // Database user
  password: 'devtedspass',     // Password for the database user
  host: 'localhost',        // Host where the PostgreSQL instance is running
  database: 'demodb',      // Database name

  port: 6432,                  // Default port for PostgreSQL
  ssl: false,                  // Disable SSL for local development
});

// Instantiates the Prisma adapter using the Neon connection pool
const adapter = new PrismaNeon(pool);

// Creates an instance of PrismaClient with the custom adapter
export const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Connected to the database successfully.');
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



