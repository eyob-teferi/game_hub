import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";

import { GameQuery } from "../App";

interface Props{
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];

  

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        spacing={6}
        padding='10px'
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading &&
          skeltons.map((skelton) => (
            <GameCardSkelton key={skelton}></GameCardSkelton>
          ))}
        {data?.results.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
