import { Heading } from "@chakra-ui/react";
import { MusicQuery } from "./Browse";

interface Props {
  musicQuery: MusicQuery;
}

const MusicHeading = ({ musicQuery }: Props) => {
  const heading = `
  ${musicQuery.level?.name || ""} 
  ${musicQuery.genre?.name || ""} 
  Music`;
  return (
    <Heading
      as="h1"
      textAlign={{ base: "center", lg: "left" }}
      color={"blue.300"}
      marginY={5}
      fontSize={{ base: "4xl", lg: "5xl" }}
      width={{ base: "auto", lg: "100%" }}
    >
      {heading}
    </Heading>
  );
};

export default MusicHeading;
