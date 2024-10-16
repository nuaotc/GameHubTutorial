import ColorModeSwitch from "./ColorModeSwitch";
import { Button, HStack } from "@chakra-ui/react";
import { MdReplay } from "react-icons/md";

const Control = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <ColorModeSwitch />
      <Button
        backgroundColor={"blue.300"}
        color={"black"}
        width={16}
        fontSize={20}
        fontWeight={"bold"}
        _hover={{ bg: "white" }}
      >
        <MdReplay />
      </Button>
    </HStack>
  );
};

export default Control;
