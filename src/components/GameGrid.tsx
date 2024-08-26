import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";

import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];

  const items =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={items}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          spacing={6}
          padding="10px"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        >
          {isLoading &&
            skeltons.map((skelton) => (
              <GameCardSkelton key={skelton}></GameCardSkelton>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard game={game} key={game.id} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
