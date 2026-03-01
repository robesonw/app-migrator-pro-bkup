import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      passwordHash: bcrypt.hashSync('securePassword', 10),
      role: 'ADMIN',
    },
  });
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());