import { api } from '@/constant/api';
import instance from '@/lib/axiosRequest';

export const getUsers = () => {
  // return new Promise((resolve, reject) => {
  //   instance
  //     .get(api.users)
  //     .then((res) => {
  //       resolve(res.data);
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     });
  // });
  return instance.get(api.users);
};
