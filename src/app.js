import express from 'express';
import {sendWelcome} from './mailer';

const app = express();

app.get('/send-mail', (req, res) => {
  sendWelcome();
  return res.send("Sending welcome emails.");
});

export default app;
