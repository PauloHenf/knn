// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

// import { SMTPClient } from 'emailjs';

// export default async function handler(req, res) {
//   const { messageBody } = req.body;

//   const client = new SMTPClient({
//     user: process.env.EMAIL,
//     password: process.env.PASSWORD,
//     host: 'smtp.gmail.com',
//     ssl: true,
//   });

//   try {
//     const message = await client.sendAsync({
//       text: messageBody,
//       from: 'acoesknnsbs@gmail.com',
//       to: 'acoesknnsbs@gmail.com',
//       subject: 'Promocao dia dos Namorados',
//     });
//     console.log(message);
//   } catch (err) {
//     console.error(err);
//   }

//   res.status(200).json({ message: 'Send Mail' });
// }
