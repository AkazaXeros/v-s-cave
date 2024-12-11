import { Platform } from './usePlatforms';
import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';

import APIClient, { FetchedDataRes } from '../sources/apiClient';

const apiClient = new APIClient<Game>('/games');

export type Game = {
  id: number;
  name: string;
  slug: string;
  image: string;
  metacritic: number;
  background_image: string;
  games_count: number;
  parent_platforms: { platform: Platform }[];
};

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchedDataRes<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms:
            gameQuery.platform?.id !== 2 ? gameQuery.platform?.id : null,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
export default useGames;
