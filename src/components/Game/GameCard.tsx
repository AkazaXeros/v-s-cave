import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../../entities/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../../utils/imageUrl';
import { Link } from 'react-router-dom';

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
      borderRadius={10}
      overflow="hidden"
    >
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" wrap="wrap" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;
