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
    <Heading as="h1" color={"blue.300"} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MusicHeading;
