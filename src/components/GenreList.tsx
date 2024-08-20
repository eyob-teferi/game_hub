import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <List spacing={3}>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
                <Image src={genre.image_background} boxSize='40px' borderRadius={8} />
                <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
