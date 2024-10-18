import { HStack, Switch, Text } from "@chakra-ui/react";

interface Props {
  toggleNames: () => void;
  showNames: boolean;
}

const HintSwitch = ({ toggleNames, showNames }: Props) => {
  return (
    <HStack>
      <Switch
        size={"lg"}
        color={"blue.300"}
        isChecked={showNames}
        onChange={toggleNames}
      />
      <Text fontSize={20}>Hint</Text>
    </HStack>
  );
};

export default HintSwitch;
