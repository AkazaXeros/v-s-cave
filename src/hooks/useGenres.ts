import { useQuery } from '@tanstack/react-query';
import APIClient from '../sources/apiClient';

const apiClient = new APIClient<Genre>('/genres');

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;
//
