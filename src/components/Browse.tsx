import { Box, Grid, GridItem, Hide, HStack, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useState } from "react";
import MusicGenreList, { MusicGenre } from "./MusicGenreList";
import SortSelector from "./SortSelector";
import MusicGrid from "./MusicGrid";
import MusicLevelSelector, { MusicLevel } from "./MusicLevelSelector";
import MusicHeading from "./MusicHeading";

export interface MusicQuery {
  genre: MusicGenre | null;
  level: MusicLevel | null;
  sortOrder: string;
  searchText: string;
}

function Browse() {
  const [musicQuery, setMusicQuery] = useState<MusicQuery>({} as MusicQuery);

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
          onSearch={(searchText) =>
            setMusicQuery({ ...musicQuery, searchText })
          }
        />
      </GridItem>

      <Hide below="md">
        <GridItem area="aside" paddingX={5}>
          <MusicGenreList
            isCollapse={false}
            selectedGenre={musicQuery.genre}
            onSelectGenre={(genre) => setMusicQuery({ ...musicQuery, genre })}
          />
        </GridItem>
      </Hide>

      <Show below="md">
        <GridItem area="aside" paddingX={5}>
          <MusicGenreList
            isCollapse={true}
            selectedGenre={musicQuery.genre}
            onSelectGenre={(genre) => setMusicQuery({ ...musicQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <MusicHeading musicQuery={musicQuery} />
          <HStack spacing={5} marginBottom={5}>
            <MusicLevelSelector
              selectedLevel={musicQuery.level}
              onSelectLevel={(level) => setMusicQuery({ ...musicQuery, level })}
            />
            <SortSelector
              sortOrder={musicQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setMusicQuery({ ...musicQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <MusicGrid musicQuery={musicQuery} />
      </GridItem>
    </Grid>
  );
}

export default Browse;
