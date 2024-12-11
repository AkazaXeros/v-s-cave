import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/UI/NavBar';
import GameGrid from './components/Game/GameGrid';
import GenresList from './components/Genre/GenresList';
import PlatformSelector from './components/Selectors/PlatformSelector';
import SortSelector from './components/Selectors/SortSelector';
import GameHeading from './components/Game/GameHeading';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // >= 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
