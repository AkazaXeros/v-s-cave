import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';

import apiClient, { FetchedDataRes } from '../sources/apiClient';

export type Platform = {
  id: number;
  slug: string;
  name: string;
};

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
      apiClient
        .get<FetchedDataRes<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms:
              gameQuery.platform?.id !== 2 ? gameQuery.platform?.id : null,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
export default useGames;
