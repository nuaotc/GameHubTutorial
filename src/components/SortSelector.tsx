import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  //sorting order is in ascending by default, adding a hyphen can reverse the order
  //so user always sees the newest, highest item first (descending order)
  const sortOrders = [
    { value: "", label: "---" },
    { value: "nameAsc", label: "Name ascending" },
    { value: "nameDesc", label: "Name descending" },
    { value: "yearAsc", label: "Release year ascending" },
    { value: "yearDesc", label: "Release year descending" },
    { value: "levelAsc", label: "Difficulty ascending" },
    { value: "levelDesc", label: "Difficulty descending" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  //highlight the current sort selection makes clear to user when they pick another sort order that is different then the current,
  //as sometimes user can forget what they already viewed/viewing
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "---"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            color={
              order.label === currentSortOrder?.label ? "blue.300" : "normal"
            }
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
