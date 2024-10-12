import { Box, Grid, GridItem, Hide, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  //to properly align components, wrap them in a parent box or container, change the padding there
  //instead of apply padding to each component, that way when we need to make changes in the future, only need to change one place
  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`, // >1024px
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Hide below="md">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            isCollapse={false}
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Hide>

      <Show below="md">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            isCollapse={true}
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

// function App() {
//   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
//   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
//     null
//   );

//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"`, // >1024px
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "200px 1fr",
//       }}
//     >
//       <GridItem area="nav">
//         <NavBar />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside" paddingX={5}>
//           <GenreList
//             selectedGenre={selectedGenre}
//             onSelectGenre={(genre) => setSelectedGenre(genre)}
//           />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <PlatformSelector
//           selectedPlatform={selectedPlatform}
//           onSelectPlatform={(platform) => setSelectedPlatform(platform)}
//         />
//         <GameGrid
//           selectedPlatform={selectedPlatform}
//           selectedGenre={selectedGenre}
//         />
//       </GridItem>
//     </Grid>
//   );
// }

export default App;
