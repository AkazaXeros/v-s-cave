import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../../hooks/useGenres';
import getCroppedImageUrl from '../../utils/imageUrl';
import GenresSkeleton from './GenreSkeleton';

const GenresList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenresSkeleton key={skeleton} />)}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenresList;
