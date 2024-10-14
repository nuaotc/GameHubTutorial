import {
  Box,
  Flex,
  Grid,
  GridItem,
  Hide,
  HStack,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";
import MusicGenreList, { MusicGenre } from "./MusicGenreList";
import SortSelector from "./SortSelector";
import MusicGrid from "./MusicGrid";
import MusicLevelSelector, { MusicLevel } from "./MusicLevelSelector";
import MusicHeading from "./MusicHeading";
import SearchInput from "./SearchInput";

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
        base: `"aside" "main"`,
        md: `"aside main"`, // lg >1024px
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <Hide below="md">
        <GridItem area="aside" paddingX={5} paddingTop={7}>
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
        <Box paddingX={2}>
          <Flex
            direction={{ base: "column", lg: "row" }} // Column on small screens, row on medium and larger
            justifyContent="space-between"
            alignItems="center"
            marginBottom={5} // Add space between this section and the next
          >
            <MusicHeading musicQuery={musicQuery} />

            <SearchInput
              onSearch={(searchText) =>
                setMusicQuery({ ...musicQuery, searchText })
              }
              // Full width on small screens, auto on larger
              // Add space when stacked vertically
            />
          </Flex>

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
