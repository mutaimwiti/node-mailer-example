import dotenv from 'dotenv';

dotenv.config();

const {HOST, PORT, USERNAME, PASSWORD} = process.env;

module.exports = {
  mailer: {
    host: HOST,
    port: PORT,
    auth: {
      user: USERNAME,
      pass: PASSWORD
    }
  }
};
