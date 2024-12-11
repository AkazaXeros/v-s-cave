import { useQuery } from '@tanstack/react-query';
import APIClient from '../sources/apiClient';
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default usePlatforms;
