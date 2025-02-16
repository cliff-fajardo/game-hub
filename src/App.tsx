import { Box, Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"


export interface GameQuery {
  genre: Genre | null;
  platforms: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr'
    }}>

    {/* Top Nav */}
    <GridItem area='nav'>
      <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
    </GridItem>

    {/* Left Side Panel */}
    <GridItem area='aside' paddingX={5} display={{ base: "none", lg: "block" }}>
      <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem>

    {/* Main Game Card Section */}
    <GridItem area='main'>
      <Box paddingLeft={10}>
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={5} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platforms} onSelectedPlatform={(platforms) => setGameQuery({ ...gameQuery, platforms })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
      </Box>

      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App