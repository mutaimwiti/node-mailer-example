import mailer from 'nodemailer';
import config from 'config';

const transport = mailer.createTransport(
  config.get('mailer')
);

const defaults = {
  from: '"Acme Team" <no-reply@acme.com>',
  to: 'foo@acme.com, bar@acme.com',
};

const send = (data, callback) => {
  transport.sendMail({...defaults, data}, (error, info) => {
    return callback(error, info);
  });
};

export default send;
