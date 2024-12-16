import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Publisher';

export type Game = {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  image: string;
  metacritic: number;
  background_image: string;
  games_count: number;
  parent_platforms: { platform: Platform }[];
};
