import dotenv from 'dotenv';
import express from 'express';
import {send} from './mailer';

dotenv.config();

const app = express();

app.get('/send-mail', (req, res) => {

  send((error, info) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.send(info);
  });
});

export default app;
