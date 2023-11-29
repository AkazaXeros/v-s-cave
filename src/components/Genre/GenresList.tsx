import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../utils/imageUrl';
import GenresSkeleton from './GenreSkeleton';

type Props = {
  onGenreClick: (genre: Genre) => void;
};

const GenresList = ({ onGenreClick }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && null}
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
              <Text
                fontSize="lg"
                variant="link"
                cursor="pointer"
                _hover={{ textDecoration: 'underline' }}
                onClick={() => onGenreClick(genre)}
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
