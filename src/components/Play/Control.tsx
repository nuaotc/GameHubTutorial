import { Button, HStack } from "@chakra-ui/react";
import { MdReplay } from "react-icons/md";
import HintSwitch from "./HintSwitch";
import { FaPlay, FaStop } from "react-icons/fa";

interface Props {
  toggleNames: () => void;
  showNames: boolean;
  refresh: () => void;
  autoPlay: () => void;
  isPlaying: boolean;
}

const Control = ({
  toggleNames,
  showNames,
  refresh,
  autoPlay,
  isPlaying,
}: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <HintSwitch toggleNames={toggleNames} showNames={showNames} />
      <Button
        backgroundColor={"blue.300"}
        color={"black"}
        width={16}
        fontSize={18}
        fontWeight={"bold"}
        _hover={{ bg: "white" }}
        onClick={() => autoPlay()}
      >
        {isPlaying ? <FaStop /> : <FaPlay />}
      </Button>
      <Button
        backgroundColor={"blue.300"}
        color={"black"}
        width={16}
        fontSize={26}
        fontWeight={"bold"}
        _hover={{ bg: "white" }}
        onClick={() => refresh()}
      >
        <MdReplay />
      </Button>
    </HStack>
  );
};

export default Control;
