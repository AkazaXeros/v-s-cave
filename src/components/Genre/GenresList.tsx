import { HStack, Heading, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../utils/imageUrl';
import GenresSkeleton from './GenreSkeleton';
import { skeletons } from '../../utils/skeletonArray';

type Props = {
  onGenreClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

const GenresList = ({ onGenreClick, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenresSkeleton key={skeleton} />)}
        {genres.map((genre) => (
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
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
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
