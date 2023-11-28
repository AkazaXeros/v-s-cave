import { useEffect, useState } from 'react';
import apiClient from '../sources/apiClient';
import { CanceledError } from 'axios';

export type Game = {
  id: number;
  name: 'string';
  slug: 'string';
  image: 'string';
  background_image: 'string';
  games_count: number;
};

export type FetchedGamesRes = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchedGamesRes>('/games', { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
