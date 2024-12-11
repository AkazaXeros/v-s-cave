import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchedDataRes } from '../sources/apiClient';

type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchedDataRes<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatforms;
