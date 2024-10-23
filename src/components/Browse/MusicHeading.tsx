import { Heading } from "@chakra-ui/react";
import { MusicQuery } from "./Browse";

interface Props {
  musicQuery: MusicQuery;
}

// Dynamically changes the heading to reflect user selection which represent the filtered/sorted dataset
const MusicHeading = ({ musicQuery }: Props) => {
  const heading = `
  ${musicQuery.level?.name || ""} 
  ${musicQuery.genre?.name || ""} 
  Music`;
  return (
    <Heading
      as="h1"
      textAlign={{ base: "center", sm: "left" }}
      color={"blue.300"}
      marginY={5}
      fontSize="4xl"
      width={{ base: "auto", lg: "100%" }} // Full width on small screens, auto on large
    >
      {heading}
    </Heading>
  );
};

export default MusicHeading;
