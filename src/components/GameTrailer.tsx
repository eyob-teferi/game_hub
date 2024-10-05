import { Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw new Error("Something Went Wrong");

  const first = data?.results[0];

  if (!first) return null;
  return <video controls src={first.data[480]} poster={first.preview}></video>;
};

export default GameTrailer;
