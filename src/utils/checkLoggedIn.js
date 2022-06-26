import { Logger } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

const logger = new Logger('checkLoggedIn');

const checkLoggedIn = () => {
  return new Promise((resolve, reject) => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        if (user) {
          resolve(true, user);
        } else {
          resolve(false, {});
        }
      })
      .catch((err) => {
        if (err !== 'The user is not authenticated') {
          logger.error(err);
        }

        reject(false, {});
      });
  });
};

export default checkLoggedIn;
