import mailer from 'nodemailer';
import config from 'config';

const transport = mailer.createTransport(
  config.get('mailer')
);

const sendWelcome = (callback) => {
  const data = {
    from: '"Acme Team" <no-reply@acme.com>',
    to: 'foo@acme.com, bar@acme.com',
    subject: 'We are excited',
    text: 'Hello\nWelcome to Acme',
    html: '<b>Hello</b><p>Welcome to Acme</p>'
  };

  transport.sendMail(data, (error, info) => {
    return callback(error, info);
  });
};

export {sendWelcome};
