import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpamdableText from "../components/ExpamdableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box paddingX={7}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpamdableText>{game.description_raw}</ExpamdableText>
          <GameAttributes game={game} />
          <GameTrailer gameId={game.id} />
        </GridItem>
        <GridItem>
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
