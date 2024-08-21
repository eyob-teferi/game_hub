import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import ListGamePlatforms from "./ListGamePlatforms";
import Critic from "./Critic";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card  borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} alt="game image" />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <ListGamePlatforms platform={game.parent_platforms} />
          <Critic score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
