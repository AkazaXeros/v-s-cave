import { Text } from '@chakra-ui/react';
import useGenres from '../../hooks/useGenres';

const GenresList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GenresList;
