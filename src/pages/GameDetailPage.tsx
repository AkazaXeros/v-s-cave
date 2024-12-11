import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/UI/ExpandableText';

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
    </>
  );
};

export default GameDetailPage;
