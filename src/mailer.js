import mailer from "nodemailer";

const send = (done) => {
  const {HOST, PORT, USERNAME, PASSWORD} = process.env;

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
    return done(error, info);
  });
};

export {send};
