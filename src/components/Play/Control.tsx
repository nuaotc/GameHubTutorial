import ColorModeSwitch from "./ColorModeSwitch";
import { Button, Flex } from "@chakra-ui/react";
import { MdReplay } from "react-icons/md";

const Control = () => {
  return (
    <Flex
      direction={{ base: "column", sm: "row" }} // Column on small screens, row on medium and larger
      justifyContent="space-between"
      alignItems="center"
    >
      <ColorModeSwitch />
      <Button
        backgroundColor={"blue.300"}
        color={"black"}
        width={16}
        mt={2}
        fontSize={20}
        fontWeight={"bold"}
        _hover={{ bg: "white" }}
      >
        <MdReplay />
      </Button>
    </Flex>
  );
};

export default Control;
