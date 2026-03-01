# Database Migrations

## Initial Setup
1. Run `npm install` to install dependencies.
2. Generate the Prisma client with:
   ```
   npx prisma generate
   ```
3. Create the migration with:
   ```
   npx prisma migrate dev --name init
   ```
4. Seed the database with:
   ```
   npx prisma db seed
   ```