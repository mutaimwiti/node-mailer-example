import express from 'express';
import {sendWelcomeMails} from './mail/mails';
import {scheduleUpdateEmails} from './jobs';

const app = express();

scheduleUpdateEmails(() => {
  console.log('Sent update emails');
});

app.get('/send-mail', (req, res) => {
  sendWelcomeMails();
  return res.send("Sending welcome emails");
});

export default app;
