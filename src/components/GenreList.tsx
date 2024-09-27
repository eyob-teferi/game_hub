import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";



const GenreList = () => {
  const { data, error,isLoading } = useGenres();

  const selectedGenre=useGameQueryStore(s=>s.gameQuery.genreId)

  const setGenreId=useGameQueryStore(s=>s.setGenreId);


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
                  onClick={() => setGenreId(genre.id)}
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
