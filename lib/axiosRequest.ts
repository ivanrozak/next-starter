import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    crossDomain: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Content-Type': 'application/json',
    // 'Access-Control-Request-Headers':  'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  },
});
export default instance;
