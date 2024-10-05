import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandebleText from "../components/ExpandebleText";

import GameAttributes from "../components/GameAttributes";

import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw new Error("Something unexpected occurred");

  return (
    <>
      <SimpleGrid columns={{base:1,md:2}} spacing={5}>
        <GridItem>
          <Heading>{data?.name}</Heading>
          <ExpandebleText>{data?.description_raw}</ExpandebleText>
          <GameAttributes game={data!} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={data!.id} />
          <GameScreenshot gameId={data!.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
