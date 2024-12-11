import { Platform } from './usePlatforms';
import { useInfiniteQuery } from '@tanstack/react-query';
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
  useInfiniteQuery<FetchedDataRes<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms:
            gameQuery.platformId !== 2 ? gameQuery.platformId : null,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useGames;
