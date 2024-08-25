import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";

import { GameQuery } from "../App";
import React from "react";

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

  return (
    <Box padding="10px">
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        spacing={6}
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
      {hasNextPage && (
        <Button disabled={isFetchingNextPage}onClick={() => fetchNextPage()} marginY={3}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
