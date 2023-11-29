import { GameQuery } from '../App';
import useData from './useData';

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
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id !== 2 ? gameQuery.platform?.id : null,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]
  );

export default useGames;
