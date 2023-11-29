import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/UI/NavBar';
import GameGrid from './components/GameUI/GameGrid';
import GenresList from './components/Genre/GenresList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './components/Selectors/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/Selectors/SortSelector';

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
};

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            selectedGenre={gameQuery.genre}
            onGenreClick={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingX="1.55rem">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            selectedSortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
