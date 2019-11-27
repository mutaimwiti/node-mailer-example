import mailer from 'nodemailer';
import config from 'config';

const mailerConfig = config.get('mailer');

const send = (done) => {
  const transport = mailer.createTransport(mailerConfig);

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
