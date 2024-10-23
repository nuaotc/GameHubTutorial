import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

// This is a container to wrap other compnent that shares the same styling
// In the future when need to update the styling, only need to update the common container instead every single components
interface Props {
  children: ReactNode;
}

const MusicCardContainer = ({ children }: Props) => {
  //when renders, box returns a div, any component wrapped in the div will pass as a child, using parent styling
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default MusicCardContainer;
