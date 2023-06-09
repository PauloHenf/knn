import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const { name, phone, loveText, dest, language } = req.body;

  await prisma.promotionData.create({
    data: {
      name,
      phone,
      loveText,
      dest,
      language,
    },
  });

  res.status(201).json({ message: 'Send Message!!' });
}
