/*
 * @Author: your name
 * @Date: 2021-03-22 14:10:25
 * @LastEditTime: 2021-03-22 15:05:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/services/http.ts
 */
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";
import { TOKEN } from "./TOKEN";

let http: any = {};

http = axios.create({
//   baseURL: "https://www.yuque.com",
  timeout: 5000,
});

http.interceptors.request.use(
  (config: any) => {
    if (config.method === "post" || config.method === "POST") {
      config.data = JSON.stringify(config.data);
    }
    config.headers["X-Auth-Token"] = TOKEN;
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

http.getMethod = (url: string, data: any = {}, success: any = null, error: any = null) => {
    return http.get(url, {params: data}).then(success).catch(error);
};
http.postMethod = (url: string, data: any = {}, success: any = null, error: any = null) => {
    return http.post(url, {params: data}).then(success).catch(error);
};
http.putMethod = (url: string, data: any = {}, success: any = null, error: any = null) => {
    return http.put(url, {params: data}).then(success).catch(error);
};
http.deleteMethod = (url: string, data: any = {}, success: any = null, error: any = null) => {
    return http.delete(url, {params: data}).then(success).catch(error);
};

export default http;
