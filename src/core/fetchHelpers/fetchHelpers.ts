import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const host = 'https://jsonplaceholder.typicode.com';

const defaultAxiosHeader = {
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // }
}

export const postReq = (url: string, payload?: any, config?: AxiosRequestConfig): AxiosPromise<any> => {
  return axios.post(`${host}${url}`, payload, { ...defaultAxiosHeader })
    .then(res => res.data)
    .catch(err => {console.log(err)});
};
export const getReq = (url: string, payload?: any, config?: AxiosRequestConfig): AxiosPromise<any> => {
  return axios.get(`${host}${url}`, payload)
    .then(res => res.data)
    .catch(err => {console.log(err)});
};