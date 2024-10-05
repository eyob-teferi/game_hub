import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import ListGamePlatforms from "./ListGamePlatforms";
import Critic from "./Critic";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./emoji";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card borderRadius={10} overflow="hidden" transition="transform 0.3s ease, box-shadow 0.3s ease" _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt="game image"
        />
        <CardBody>
          <HStack justifyContent={"space-between"}>
            <ListGamePlatforms platform={game.parent_platforms} />
            <Critic score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
