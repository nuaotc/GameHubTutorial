import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { HiOutlineLightBulb } from "react-icons/hi";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        color={"blue.300"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <HiOutlineLightBulb size={20} />
    </HStack>
  );
};

export default ColorModeSwitch;
