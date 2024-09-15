import {
  Button,
  SimpleGrid,
  // Spinner,
  Text,
} from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
//import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage, //6. import
    fetchNextPage, //6. import
    hasNextPage, //6. import
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // const fetchedGamesCount =
  //   data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {/*  <InfiniteScroll
      dataLength={fetchedGamesCount}
       hasMore={!!hasNextPage}
       next={() => fetchNextPage()}
       loader={<Spinner />}
     > */}
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        paddingTop={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* 8. map pages ，里面再 map 出每一个 game*/}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {/* 7. 使用6中的 import */}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading" : "Load More"}
        </Button>
      )}
      {/* </InfiniteScroll> */}
    </>
  );
};

export default GameGrid;
