import { Grid, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import apiClient from '../../sources/apiClient.ts';

type Game = {
  id: number;
  name: 'string';
  slug: 'string';
  image: 'string';
  image_background: 'string';
  games_count: number;
};

type FetchedGamesRes = {
  count: number;
  results: Game[];
};

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchedGamesRes>('/games')
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
