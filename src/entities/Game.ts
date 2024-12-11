import { Platform } from './Platform';

export type Game = {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  image: string;
  metacritic: number;
  background_image: string;
  games_count: number;
  parent_platforms: { platform: Platform }[];
};
