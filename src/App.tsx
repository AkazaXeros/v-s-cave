import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/UI/NavBar';
import GameGrid from './components/GameUI/GameGrid';
import GenresList from './components/Genre/GenresList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './components/GameUI/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
  const [selectedGenre, setSeletedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSeletedPlatform] = useState<Platform | null>(
    null
  );

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
          <GenresList
            selectedGenre={selectedGenre}
            onGenreClick={(genre: Genre) => setSeletedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX="1.55rem">
          <PlatformSelector
            onSelectPlatform={(platform) => setSeletedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
        </Box>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
