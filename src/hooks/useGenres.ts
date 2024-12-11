import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchedDataRes } from '../sources/apiClient';

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
    queryFn: () =>
      apiClient.get<FetchedDataRes<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;
//
