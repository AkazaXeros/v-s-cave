import { Game } from '../entities/Game';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../sources/apiClient';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['game', slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
