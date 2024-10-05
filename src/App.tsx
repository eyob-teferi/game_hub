import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";



function App() {
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingLeft={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading  />
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
