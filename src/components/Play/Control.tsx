import { Button, HStack } from "@chakra-ui/react";
import { MdReplay } from "react-icons/md";
import HintSwitch from "./HintSwitch";
import { FaPlay, FaStop } from "react-icons/fa";

// game controls
// event handle functions and states passed from play component
// showName state continue passes to toggle switch
// universal icons for play, stop and refresh are imported from react-icon, saves space than text on button, and easy to understand, mobile friendly
// state of isPlaying determines the display of play or stop

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
