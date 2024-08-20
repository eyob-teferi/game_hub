import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";

const GameGrid = () => {
  const { data, error, loading } = useGames();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={10}
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {loading &&
          skeltons.map((skelton) => (
            <GameCardSkelton key={skelton}></GameCardSkelton>
          ))}
        {data.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
