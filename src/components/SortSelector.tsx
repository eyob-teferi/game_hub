import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSortOrderClicked:(order:string)=>void,
    sortOrder:string
}

const SortSelector = ({onSortOrderClicked,sortOrder}:Props) => {
  const sortArray = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrder ? sortArray.find(order=>order.value===sortOrder)?.label : 'Relevance' }
      </MenuButton>
      <MenuList>
        {sortArray.map(order=><MenuItem key={order.value} onClick={()=>onSortOrderClicked(order.value)}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
