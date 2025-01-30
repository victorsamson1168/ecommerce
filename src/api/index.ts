import axios from 'axios';

const ENVIRONMENT = process.env.ENVIRONMENT;
const PRODUCTION_API = 'https://api.redrob.io';
const STAGING_API = 'https://stagingapi.redrob.io';
const DEVELOPMENT_API = 'https://devapi.redrob.io';
const LOCAL_API = 'http://localhost:5000';
const JUNHO = 'http://192.168.0.169:5001';

let API_BASE_URL = 'https://devapi.redrob.io';

switch (ENVIRONMENT) {
  case 'production':
    API_BASE_URL = PRODUCTION_API;
    break;
  case 'staging':
    API_BASE_URL = STAGING_API;
    break;
  case 'development':
    API_BASE_URL = DEVELOPMENT_API;
    break;
  default:
    break;
}

const API = axios.create({
  baseURL: API_BASE_URL,
});

export * from './assess';
export * from './auth';

export { API };
