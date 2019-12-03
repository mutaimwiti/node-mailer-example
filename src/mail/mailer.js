import mailer from 'nodemailer';
import config from 'config';

const transport = mailer.createTransport(
  config.get('googleMailer')
);

const defaults = {
  from: '"Acme Team" <no-reply@acme.com>',
  to: 'mutaimwiti@acme.com',
};

const send = (data, callback) => {
  transport.sendMail({...defaults, ...data}, (error, info) => {
    return callback(error, info);
  });
};

export default send;
