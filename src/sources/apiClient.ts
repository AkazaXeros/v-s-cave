import axios, { AxiosRequestConfig } from 'axios';

// ? For a more robust and secure solution, we should build a custom backend server that acts as a proxy between the client app and the external API. We can securely store the API key on the backend server, and then our client app communicates with the backend, which takes care of making the API requests on our behalf.

export type FetchedDataRes<T> = {
  count: number;
  next: string | null;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  params: {
    key: `${import.meta.env.VITE_API_KEY}`,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchedDataRes<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}

export default APIClient;
