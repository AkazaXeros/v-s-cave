import { useQuery } from '@tanstack/react-query';
import APIClient from '../sources/apiClient';
import ms from 'ms';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default usePlatforms;
