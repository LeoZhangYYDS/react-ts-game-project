import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
        <NavBar
          onSearch={(searchText) => setGameQuary({ ...gameQuary, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={8}>
          <GenreList
            selectedGenreId={gameQuary.genreId}
            onSelectGenre={(genre) =>
              setGameQuary({ ...gameQuary, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={10}>
        <GameHeading gameQuery={gameQuary} />
        <HStack spacing={5}>
          <PlatformSelector
            setSelectedPlatformId={gameQuary.platformId}
            onSelectPlatform={(platform) =>
              setGameQuary({ ...gameQuary, platformId: platform.id })
            }
          />
          <SortSelector
            sortOrder={gameQuary.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuary({ ...gameQuary, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;
