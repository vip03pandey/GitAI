// src/lib/db.ts
import { PrismaClient } from '@prisma/client'; // ✅ Standard// ✅ Correct

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // optional
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
