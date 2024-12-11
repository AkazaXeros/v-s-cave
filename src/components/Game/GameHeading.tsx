import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../../App';
import usePlatform from '../../hooks/usePlatform';
import useGenre from '../../hooks/useGenre';

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" paddingX="1.6rem" marginBottom="1rem" fontSize="5xl">
      {heading}
    </Heading>
  );
};
export default GameHeading;
