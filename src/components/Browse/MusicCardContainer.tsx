import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MusicCardContainer = ({ children }: Props) => {
  //when renders, box returns a div
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default MusicCardContainer;
