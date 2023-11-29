/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AxiosRequestConfig, CanceledError } from 'axios';
import apiClient from '../sources/apiClient';

type FetchedDataRes<T> = {
  count: number;
  results: T[];
};

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchedDataRes<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    deps ? [...deps] : []
  );

  return { data, setData, error, setError, isLoading };
};

export default useData;
