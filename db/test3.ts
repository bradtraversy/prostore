
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';



// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;


// Set the WebSocket proxy to work with the local instance
neonConfig.wsProxy = `prostore-pg_proxy-1:80/v1`;
// Disable all authentication and encryption
  // Disable all authentication and encryption
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;



// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.


const pool = new Pool({
    user: 'devtedsuser',         // Database user
    password: 'devtedspass',     // Password for the database user
    host: 'postgres',        // Host where the PostgreSQL instance is running
    database: 'postgres',      // Database name
  
    //port: 5432,                  // Default port for PostgreSQL
    ssl: false,                  // Disable SSL for local development
  });

  

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon(pool);

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return  product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
    cart: {
      itemsPrice: {
        needs: { itemsPrice: true },
        compute(cart) {
          return cart.itemsPrice.toString();
        },
      },
      shippingPrice: {
        needs: { shippingPrice: true },
        compute(cart) {
          return cart.shippingPrice.toString();
        },
      },
      taxPrice: {
        needs: { taxPrice: true },
        compute(cart) {
          return cart.taxPrice.toString();
        },
      },
      totalPrice: {
        needs: { totalPrice: true },
        compute(cart) {
          return cart.totalPrice.toString();
        },
      },
    },
    order: {
      itemsPrice: {
        needs: { itemsPrice: true },
        compute(cart) {
          return cart.itemsPrice.toString();
        },
      },
      shippingPrice: {
        needs: { shippingPrice: true },
        compute(cart) {
          return cart.shippingPrice.toString();
        },
      },
      taxPrice: {
        needs: { taxPrice: true },
        compute(cart) {
          return cart.taxPrice.toString();
        },
      },
      totalPrice: {
        needs: { totalPrice: true },
        compute(cart) {
          return cart.totalPrice.toString();
        },
      },
    },
    orderItem: {
      price: {
        compute(cart) {
          return cart.price.toString();
        },
      },
    },
  },
});


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
  try {
 
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
 
  } catch (error) {
    console.error('Error grouping products:', error);
  }
}

// Initialize the application
(async () => {
  await main();
  await main2();
})();