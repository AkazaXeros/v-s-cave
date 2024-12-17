import useGame from '../hooks/useGame';
import { useParams } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/UI/ExpandableText';
import GameAttributes from '../components/Game/GameAttributes';
import GameTrailer from '../components/Game/GameTrailer';
import GameScreenshot from '../components/Game/GameScreenshot';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  const englishdescription = game.description_raw.split('Español')[0];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game.name}</Heading>

        <ExpandableText>{englishdescription}</ExpandableText>

        <GameAttributes game={game} />
      </Box>

      <Box>
        <GameTrailer gameId={game.id} />

        <GameScreenshot gameId={game.id} />
      </Box>

      {/* {game.id === 9767 && <Text>hello</Text>} */}
    </SimpleGrid>
  );
};

export default GameDetailPage;
