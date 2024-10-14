import { HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
