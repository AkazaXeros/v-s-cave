import useGame from '../hooks/useGame';
import { useParams } from 'react-router-dom';
import { Heading, Spinner } from '@chakra-ui/react';
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
    <>
      <Heading>{game.name}</Heading>

      <ExpandableText>{englishdescription}</ExpandableText>

      <GameAttributes game={game} />

      <GameTrailer gameId={game.id} />

      <GameScreenshot gameId={game.id} />

      {/* {game.id === 9767 && <Text>hello</Text>} */}
    </>
  );
};

export default GameDetailPage;
