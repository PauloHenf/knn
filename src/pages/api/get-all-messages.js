import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const messages = await prisma.fiveHundred.findMany();

  res.status(200).json({ messages });
}
