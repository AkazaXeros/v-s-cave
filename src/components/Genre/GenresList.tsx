import { HStack, Heading, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../../hooks/useGenres';
import useGameQueryStore from '../../store';
import getCroppedImageUrl from '../../utils/imageUrl';
import { skeletons } from '../../utils/skeletonArray';
import GenresSkeleton from './GenreSkeleton';

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenresSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit={'cover'}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Text
                fontSize="lg"
                variant="link"
                cursor="pointer"
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                _hover={{ textDecoration: 'underline' }}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenresList;
