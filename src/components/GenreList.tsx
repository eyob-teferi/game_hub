import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreClick: (genre: Genre) => void,
  selectedGenre?:number
}

const GenreList = ({ onGenreClick,selectedGenre }: Props) => {
  const { data, error,isLoading } = useGenres();


  if (error) return null;

  if(isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize={'2xl'} marginY={5}>Genres</Heading>
      <List spacing={3}>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="40px"
                borderRadius={8}
                objectFit={'cover'}
              />
                <Button
                  fontSize={"lg"}
                  variant="link"
                  onClick={() => onGenreClick(genre)}
                  fontWeight={genre.id===selectedGenre ? 'bold':'normal'}
                  whiteSpace={'normal'}
                  textAlign={'left'}
                >
                 {genre.name}
                </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
