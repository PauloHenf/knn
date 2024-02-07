import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
    const pessoa1 = await prisma.pessoa.create({
        data: {
            name:"André",
            phone: 12996351194,
            email:"teste@teste.com",
            age: 17,
        },
    });
    console.log(pessoa1);
})();