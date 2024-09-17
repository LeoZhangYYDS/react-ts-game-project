import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: ` "main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={8}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={10}>
        <GameHeading />
        <HStack spacing={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
