import useData from './useData';
import { Genre } from './useGenres';

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
