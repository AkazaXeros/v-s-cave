import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GenresList from '../components/Genre/GenresList';
import GameHeading from '../components/Game/GameHeading';
import PlatformSelector from '../components/Selectors/PlatformSelector';
import SortSelector from '../components/Selectors/SortSelector';
import GameGrid from '../components/Game/GameGrid';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // >= 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <HStack paddingX="1.55rem">
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
