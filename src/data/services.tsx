const ENVIRONMENT = process.env.ENVIRONMENT;
const currentHost = typeof window !== 'undefined' ? window.location.host : '';

export let REDROB_JP = `https://${currentHost}`;
// currentHost === 'chat.redrob.io'
//   ? 'https://chat.redrob.io'
//   : 'https://redrob.io';

export let REDROB_JS =
  currentHost === 'www.redrob.io'
    ? 'https://www.redrob.io'
    : 'https://seeker.redrob.io';
export let REDROB_SITE = 'redrob.site';

switch (ENVIRONMENT) {
  case 'local':
    REDROB_JP = 'http://localhost:3000';
    REDROB_JS = 'localhost:3001';
    REDROB_SITE = 'test.com';
    break;
  case 'development':
    REDROB_JP = `https://${currentHost}`;
    // currentHost === 'devchat.redrob.io'
    //   ? 'https://devchat.redrob.io'
    //   : 'https://dev.redrob.io';
    REDROB_JS =
      currentHost === 'dev.redrob.io'
        ? 'https://dev.redrob.io'
        : 'https://devseeker.redrob.io';
    REDROB_SITE = 'dev-redrob.site';
    break;
  case 'staging':
    REDROB_JP = `https://${currentHost}`;
    // REDROB_JP =
    //   currentHost === 'stagingchat.redrob.io'
    //     ? 'https://stagingchat.redrob.io'
    //     : 'https://dev.redrob.io';
    REDROB_JS =
      currentHost === 'dev.redrob.io'
        ? 'https://dev.redrob.io'
        : 'https://stagingseeker.redrob.io';
    REDROB_SITE = 'staging-redrob.site';
    break;
  default:
    break;
}
