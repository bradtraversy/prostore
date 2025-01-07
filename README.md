# Prostore

A full featured Ecommerce website built with Next.js, TypeScript, PostgreSQL and Prisma.

<img src="/public/images/screen.png" alt="Next.js Ecommerce" />

This project is from my **Next.js Ecommerce course**

- Traversy Media: https://www.traversymedia.com/nextjs-ecommerce
- Udemy: https://www.udemy.com/course/nextjs-ecommerce-course


https://gal.hagever.com/posts/running-vercel-postgres-locally



## Features

- Next Auth authentication
- Admin area with stats & chart using Recharts
- Order, product and user management
- User area with profile and orders
- Stripe API integration
- PayPal integration
- Cash on delivery option
- Interactive checkout process
- Featured products with banners
- Multiple images using Uploadthing
- Ratings & reviews system
- Search form (customer & admin)
- Sorting, filtering & pagination
- Dark/Light mode
- Much more

## Install npm

sudo apt update
sudo apt install npm

sudo apt-get install iputils-ping

pinga9c52ed4ee35




### Install Dependencies

```bash
npm install
```

Note: Some dependencies may have not yet been upadated to support React 19. If you get any errors about depencency compatability, run the following:

```bash
npm install --legacy-peer-deps
```

## docker config & pgAdmin config
https://github.com/devteds/devcontainers-for-developers-rails-multi-container-local-setup/tree/main/.devcontainer


http://127.0.0.1:5050/browser/
localhost : db 


### Environment Variables

Rename the `.example-env` file to `.env` and add the following

#### PostgreSQL Database URL

Sign up for a free PostgreSQL database through Vercel. Log into Vercel and click on "Storage" and create a new Postgres database. Then add the URL.

**Example:**

```
DATABASE_URL="postgresql://username:password@host:port/prostoredb"
DATABASE_URL="postgresql://devtedsuser:devtedspass@localhost:5432/prostoredb"
DATABASE_URL="postgresql://devtedsuser:devtedspass@localhost:6432/demodb"
```

#### Next Auth Secret

Generate a secret with the following command and add it to your `.env`:

```bash
openssl rand -base64 32
```

**Example:**

```
NEXTAUTH_SECRET="sSMx5DpKJ0Az21c6H+kSnVDeU+nSr6czVFE7DA9JJzw="
```

#### PayPal Client ID and Secret

Create a PayPal developer account and create a new app to get the client ID and secret.

**Example:**

```
PAYPAL_CLIENT_ID="AeFIdonfA_dW_ncys8G4LiECWBI9442IT_kRV15crlmMApC6zpb5Nsd7zlxj7UWJ5FRZtx"
PAYPAL_APP_SECRET="REdG53DEeX_ShoPawzM4vQHCYy0a554G3xXmzSxFCDcSofBBTq9VRqjs6xsNVBcbjqz--HiiGoiV"
```

#### Stripe Publishable and Secret Key

Create a Stripe account and get the publishable and secret key.

**Example:**

```
STRIPE_SECRET_KEY="sk_test_51QIr0IG87GyTererxmXxEeqV6wuzbmC0TpkRzabxqy3P4BpzpzDqnQaC1lZhmYg6IfNarnvpnbjjw5dsBq4afd0FXkeDriR"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51QIr0Ids7GyT6H7X6R5GoEA68lYDcbcC94VU0U02SMkrrrYZT2CgSMZ1h22udb5Rg1AuonXyjmAQZESLLj100W3VGVwze"
```

#### Uploadthing Settings

Sign up for an account at https://uploadthing.com/ and get the token, secret and app ID.

**Example:**

```
UPLOADTHING_TOKEN='tyJhcGlLZXkiOiJza19saXZlXzQ4YTE2ZjhiMDE5YmFiOgrgOWQ4MmYxMGQxZGU2NTM3YzlkZGI3YjNiZDk3MmRhNGZmNGMwMmJlOWI2Y2Q0N2UiLCJhcHBJZCI6InRyejZ2NHczNzUiLCJyZWdpb25zIjpbInNlYTEiXX0='
UPLOADTHIUG_SECRET='gg'
UPLOADTHING_APPID='trz6vd475'
```

#### Resend API Key

Sign up for an account at https://resend.io/ and get the API key.

**Example:**

```
RESEND_API_KEY="re_ZnhUfrjR_QD2cDqdee3iYCrkfvPYFCYiXm"
```

### setup database
DATABASE_URL="postgresql://devtedsuser:devtedspass@a9c52ed4ee35:5432/demodb"
ENCRYPTION_KEY="test"
export DATABASE_URL
export ENCRYPTION_KEY
npx prisma generate
npx prisma migrate dev
npx tsx ./db/seed

### Run
sudo apt install pgbouncer



export DATABASE_URL="postgresql://devtedsuser:devtedspass@localhost:6432/demodb"
 

# add "[databases]
# mydb = host=a9c52ed4ee35 port=5432 dbname=demodb user=devtedsuser password=devtedspass

# vi /etc/pgbouncer/pgbouncer.ini
# [databases]
# demodb = host=a9c52ed4ee35 port=5432 dbname=demodb
# ;; disable, allow, require, verify-ca, verify-full
# client_tls_sslmode = disable
# log_connections = 1
# log_disconnections = 1
# log_pooler_errors = 1
# verbose=3
# ;; IP address or * which means all IPs
# listen_addr = localhost
# listen_port = 6432 


export PGPASSWORD='devtedspass'
psql -h a9c52ed4ee35 -p 5432 -U devtedsuser -d demodb -c 'SELECT * FROM public."User"'

service pgbouncer stop
service pgbouncer start


echo '"devtedsuser" "devtedspass"' > /etc/pgbouncer/userlist.txt
psql -h localhost -p 6432 -U "devtedsuser" -d "demodb" -c 'SELECT * FROM public."User"'
cat /var/log/postgresql/pgbouncer.log


export ENCRYPTION_KEY="test"
export DATABASE_URL="postgres://postgres:postgres@a9c52ed4ee35:5432/postgres"
npx prisma generate
npx prisma migrate dev
npx tsx ./db/seed

NEXTAUTH_SECRET="sSMx5DpKJ0Az21c6H+kSnVDeU+nSr6czVFE7DA9JJzw="
export NEXTAUTH_SECRET


```bash

# Run in development mode
npm run dev

# Build for production
npm run build

# Run in production mode
npm start

# Export static site
npm run export
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


```

## Seed Database

To seed the database with sample data, run the following command:

```bash



export DATABASE_URL
npx tsx ./db/seed

```

## Prisma Studio

To open Prisma Studio, run the following command:

```bash
npx prisma studio

## Demo

I am not sure how long I will have this demo up but you can view it here:

https://prostore-one.vercel.app/

## Note On Vercel Deployment For Hobby Plan

In order to fit within the limitations of the Vercel hobby plan, we removed the **bcrypt-ts-edge** package and added custom encryption. Now the full project can be deployed to the Hobby plan.

## License

MIT License

Copyright (c) [2025] [Traversy Media]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall
