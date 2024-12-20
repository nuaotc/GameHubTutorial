import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import levels from "./data/musicLevels";

export interface MusicLevel {
  id: number;
  name: string;
}

interface Props {
  onSelectLevel: (level: MusicLevel | null) => void;
  selectedLevel: MusicLevel | null;
}

const MusicLevelSelector = ({ onSelectLevel, selectedLevel }: Props) => {
  // offer an "all" option reverts the selection back to show all music
  // offers user the convenience to not need to click back button or refresh the page
  return (
    <Menu>
      <MenuButton fontSize="lg" as={Button} rightIcon={<BsChevronDown />}>
        {selectedLevel?.name || "Level"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectLevel(null)}>All</MenuItem>
        {levels.map((level) => (
          <MenuItem
            color={level.id === selectedLevel?.id ? "blue.300" : "normal"}
            onClick={() => onSelectLevel(level)}
            key={level.id}
          >
            {level.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MusicLevelSelector;
