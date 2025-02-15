import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"


function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr'
    }}>
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <GridItem area='aside' paddingX={5} display={{ base: "none", lg: "block" }}>
      <GenreList selectedGenre={selectedGenre} onSelectedGenre={(selectedGenre) => setSelectedGenre(selectedGenre)} />
    </GridItem>
    <GridItem area='main'>
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(selectedPlatform) => setSelectedPlatform(selectedPlatform)} />
      <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
    </GridItem>
  </Grid>
}

export default App