import { Grid, GridItem } from "@chakra-ui/react";
//import { useState } from "react";
import { MusicGenre } from "../Browse/MusicGenreList";
import { MusicLevel } from "../Browse/MusicLevelSelector";
//import ColorModeSwitch from "../ColorModeSwitch";
import FingerBoard from "./FingerBoard";
import Staff from "./Staff";
import Control from "./Control";

export interface MusicQuery {
  genre: MusicGenre | null;
  level: MusicLevel | null;
  sortOrder: string;
  searchText: string;
}

function Play() {
  //const [musicQuery, setMusicQuery] = useState<MusicQuery>({} as MusicQuery);

  //to properly align components, wrap them in a parent box or container, change the padding there
  //instead of apply padding to each component, that way when we need to make changes in the future, only need to change one place
  return (
    <Grid
      templateAreas={`"staff" "fingerBoard" "control"`}
      templateColumns="1fr"
    >
      <GridItem area="control" mt="10px" mx={"auto"} width="16rem">
        <Control />
      </GridItem>

      <GridItem area="staff" mx={"auto"}>
        <Staff />
      </GridItem>

      <GridItem area="fingerBoard" mx={"auto"}>
        <FingerBoard />
      </GridItem>
    </Grid>
  );
}

export default Play;
