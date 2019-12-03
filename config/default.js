import dotenv from 'dotenv';

dotenv.config();

const {HOST, PORT, USERNAME, PASSWORD} = process.env;

module.exports = {
  defaultMailer: {
    host: HOST,
    port: PORT,
    auth: {
      user: USERNAME,
      pass: PASSWORD
    }
  },
  googleMailer: {
    service: 'gmail',
    auth: {
      user: USERNAME,
      pass: PASSWORD
    }
  }
};
