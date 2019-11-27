import dotenv from 'dotenv';
import express from 'express';
import mailer from 'nodemailer';

dotenv.config();

const {HOST, PORT, USERNAME, PASSWORD} = process.env;

const app = express();

app.get('/send-mail', (req, res) => {
  const transport = mailer.createTransport({
    host: HOST,
    port: PORT,
    auth: {
      user: USERNAME,
      pass: PASSWORD
    }
  });

  const data = {
    from: '"Acme Team" <no-reply@acme.com>',
    to: 'foo@acme.com, bar@acme.com',
    subject: 'We are excited',
    text: 'Hello\nWelcome to Acme',
    html: '<b>Hello</b><p>Welcome to Acme</p>'
  };

  transport.sendMail(data, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.send(info);
  });
});

app.listen(3000, () => {
  console.log('Send mail here: http://localhost:3000/send-mail');
});
