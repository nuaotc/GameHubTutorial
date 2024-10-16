import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const MusicSortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  //sorting order is in ascending by default, adding a hyphen can reverse the order
  //so user always sees the newest, highest item first (descending order)

  //I was using full naming style such as name ascending, level descending etc
  //which makes the labels too lengthy when displaying on mobile
  //resulting a horizontal scroll bar to show extra text which isn't nice on mobile devices
  //so I changed to shorter more concise lables which also easier to understand at a glance
  const sortOrders = [
    { value: "", label: "---" },
    { value: "nameAsc", label: "a-z" },
    { value: "nameDesc", label: "z-a" },
    { value: "yearAsc", label: "oldest" },
    { value: "yearDesc", label: "newest" },
    { value: "levelAsc", label: "easiest" },
    { value: "levelDesc", label: "hardest" },
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

export default MusicSortSelector;
