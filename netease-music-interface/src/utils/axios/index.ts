import axios, { AxiosResponse, Method } from "axios";

import { setupInterceptorsTo } from "./interceptors";

const instance = setupInterceptorsTo(
  axios.create({
    baseURL: "",
    timeout: 60000,
  })
);

async function axiosExecute<T>({
  method = "get",
  url,
  data,
  params,
}: {
  method?: Method;
  url: string;
  data?: Record<string, any>;
  params?: Record<string, any>;
}): Promise<T> {
  return instance({
    method,
    url,
    data,
    params,
  }).then((res: AxiosResponse<T>) => res.data);
}

export default axiosExecute;
