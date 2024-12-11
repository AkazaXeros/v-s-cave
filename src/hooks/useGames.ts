import { useInfiniteQuery } from '@tanstack/react-query';

import APIClient, { FetchedDataRes } from '../sources/apiClient';
import ms from 'ms';
import useGameQueryStore from '../store';
import { Game } from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchedDataRes<Game>, Error>({
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
    staleTime: ms('24h'),
  });
};

export default useGames;
