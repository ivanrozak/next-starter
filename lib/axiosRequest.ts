import axios, { AxiosError } from 'axios';

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
  },
  withCredentials: true,
});

// const isServer = () => {
//   return typeof window === 'undefined';
// };

instance.interceptors.request.use((config) => {
  // if (accessToken) {
  //   config.headers.Authorization = `Bearer ${accessToken}`
  // }

  // if (isServer() && context?.req?.cookies) {
  //   config.headers.Cookie = `gid=${context.req.cookies.gid};`
  // }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // check conditions to refresh token
    // if (error.response?.status === 401) {
    // }
    return Promise.reject(error);
  }
);

export default instance;
