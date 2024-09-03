import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuary, setGameQuary] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav" paddingX={6} paddingY={5}>
        <NavBar onSearch={(searchText) => setGameQuary({ ...gameQuary, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={8}>
          <GenreList
            selectedGenre={gameQuary.genre}
            onSelectGenre={(genre) => setGameQuary({ ...gameQuary, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={10}>
        <GameHeading gameQuery={gameQuary} />
        <HStack spacing={5}>
          <PlatformSelector
            setSelectedPlatform={gameQuary.platform}
            onSelectPlatform={(platform) => setGameQuary({ ...gameQuary, platform })}
          />
          <SortSelector
            sortOrder={gameQuary.sortOrder}
            onSelectSortOrder={(sortOrder) => setGameQuary({ ...gameQuary, sortOrder })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;
