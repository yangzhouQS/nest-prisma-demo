import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';

const prisma = new PrismaClient();

export async function createMock(
  count: number,
  callback: (prisma: PrismaClient) => void,
) {
  for (let i = 0; i < count; i++) {
    await callback(prisma);
  }
}
