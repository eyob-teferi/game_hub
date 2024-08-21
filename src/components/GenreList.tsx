import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreClick: (genre: Genre) => void,
  selectedGenre:Genre | null
}

const GenreList = ({ onGenreClick,selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (error) return null;

  return (
    <>
      {loading && <Spinner />}
      <List spacing={3}>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="40px"
                borderRadius={8}
              />
              {genre.name === "Massively Multiplayer" ? (
                <Tooltip label={genre.name} placement="top">
                  <Button
                    fontSize={"lg"}
                    variant="link"
                    onClick={() => onGenreClick(genre)}
                    fontWeight={genre.id===selectedGenre?.id ? 'bold':'normal'}
                  >
                    <Text isTruncated>{genre.name}</Text>
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  fontSize={"lg"}
                  variant="link"
                  onClick={() => onGenreClick(genre)}
                  fontWeight={genre.id===selectedGenre?.id ? 'bold':'normal'}
                >
                  <Text isTruncated>{genre.name}</Text>
                </Button>
              )}
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
