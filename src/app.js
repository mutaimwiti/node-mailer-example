import express from 'express';
import {sendWelcomeMails} from './mail/mails';
import {scheduleUpdateEmails} from './jobs';

const app = express();

scheduleUpdateEmails(() => {
  console.log('Sent update emails');
});

app.get('/send-mail', (req, res) => {
  sendWelcomeMails((err) => {
    return err ?
      console.error('An error occurred trying to send welcome emails\n' + err)
      :
      console.log('Sent welcome emails');
  });

  return res.send("Sending welcome emails");
});

export default app;
