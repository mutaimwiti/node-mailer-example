import send from './mailer';

const sendWelcomeMails = (callback) => {
  const data = {
    subject: 'We are excited',
    text: 'Hello\nWelcome to Acme',
    html: '<b>Hello</b><p>Welcome to Acme</p>'
  };

  send(data, callback);
};

const sendUpdateEmails = (callback) => {
  const data = {
    subject: 'We are excited',
    text: 'Hello\nWe hope you are having a great time',
    html: '<b>Hello</b><p>We hope you are having a great day</p>'
  };

  send(data, callback);
};

export {sendWelcomeMails, sendUpdateEmails};
