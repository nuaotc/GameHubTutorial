import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// function defined at consumer component passed here so that input string can be passed as parameter when calling the function
interface Props {
  onSearch: (searchText: string) => void;
}

// ref references the input field so that the specific input field value can be accessed
const MusicSearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search music..."
          bgColor={"gray.600"}
        />
      </InputGroup>
    </form>
  );
};

export default MusicSearchInput;
