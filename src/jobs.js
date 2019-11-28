import cron from 'node-cron';
import {sendUpdateEmails} from "./mail/mails";

const scheduleUpdateEmails = (callback) => {
  console.log('Sending update emails every 15 seconds');
  cron.schedule('0,15,30,45 * * * * *', () => {
    sendUpdateEmails(callback);
  });
};

export {scheduleUpdateEmails};
