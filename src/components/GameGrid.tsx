import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];

  const items = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
