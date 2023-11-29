import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/UI/NavBar';
import GameGrid from './components/GameUI/GameGrid';
import GenresList from './components/Genre/GenresList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';

function App() {
  const [selectedGenre, setSeletedGenre] = useState<Genre | null>(null);

  const handleClick = (genre: Genre) => {
    setSeletedGenre(genre);
  };

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
        <GridItem area="aside" paddingX={5} paddingY="1.6rem">
          <GenresList
            selectedGenre={selectedGenre}
            onGenreClick={handleClick}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
