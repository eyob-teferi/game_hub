import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";



const SortSelector = () => {

  const sortOrder=useGameQueryStore(s=>s.gameQuery.sortOrder);
  const setSortOrder=useGameQueryStore(s=>s.setSortOrder);
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
        {sortArray.map(order=><MenuItem key={order.value} onClick={()=>setSortOrder(order.value)}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
