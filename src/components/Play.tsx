import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MusicGenre } from "./MusicGenreList";
import { MusicLevel } from "./MusicLevelSelector";
import ColorModeSwitch from "./ColorModeSwitch";

export interface MusicQuery {
  genre: MusicGenre | null;
  level: MusicLevel | null;
  sortOrder: string;
  searchText: string;
}

function Play() {
  const [musicQuery, setMusicQuery] = useState<MusicQuery>({} as MusicQuery);

  //to properly align components, wrap them in a parent box or container, change the padding there
  //instead of apply padding to each component, that way when we need to make changes in the future, only need to change one place
  return (
    <Grid
      templateAreas={{
        base: `"control" "panelString" "panelNote"`,
        md: `"control control" "panelString panelNote"`,
      }}
      templateColumns={{
        md: "1fr 1fr",
      }}
    >
      <GridItem area="control" height={10}>
        <ColorModeSwitch />
      </GridItem>

      <GridItem area="panelString" bgColor={"blue.100"}>
        <Box>
          <Text>String</Text>
        </Box>
      </GridItem>

      <GridItem area="panelNote" bgColor={"blue.500"}>
        <Box>
          <Text>Note</Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Play;
