import useScreenShot from "../hooks/useScreenshot";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((pics) => (
        <Image key={pics.id} src={pics.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
