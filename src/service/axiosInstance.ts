import axios, { Method, AxiosHeaders } from 'axios';


import { APIS, apisTypes } from './apiUrl';

const BASE_URL = process.env.BASE_URL || '';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    console.log('Axios Error : ', error?.response?.data);

    return Promise.reject(error);
  },
);

const Axios = async ({
  method,
  path,
  data,
  params,
  pathParams = '',
  header,
  isFormDate = true,
}: {
  method: Method;
  path: keyof apisTypes;
  data?: any;
  params?: any;
  pathParams?: string;
  header?: AxiosHeaders;
  isFormDate?: boolean;
}) => {
  const accessToken = '';

  const authHeder = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  const response = await axiosInstance({
    method: method,
    url: APIS[path] + pathParams,
    data: data,
    params: params,
    headers: isFormDate
      ? {
          'Content-Type': 'multipart/form-data',
          ...authHeder,
          ...header,
        }
      : {
          'Content-Type': 'application/json',
          ...authHeder,
          ...header,
        },
  });
  return response;
};

export default Axios;
