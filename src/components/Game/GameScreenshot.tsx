import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../../hooks/useScreenshots';

type Props = {
  gameId: number;
};
const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return data ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop={2}>
      {data.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image}></Image>
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshot;
