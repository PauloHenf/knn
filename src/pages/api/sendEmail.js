import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const { name, phone, email, age } = req.body;

  
  await prisma.fiveHundred.create({
    data: {
      name,
      phone: String(phone),
      email,
      age,
    },
  });

  
  const result = await prisma.fiveHundred.findMany();

  // res.status(201).json(result)
  res.status(201).json({ message: 'Send Form!!' });
}
