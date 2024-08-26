import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms,{ Platform } from "../hooks/usePlatforms";


interface Props{
    onSelectedPlatform:(platform:Platform)=>void,
    selectedPlatform?:number
}



const PlatformSelector = ({onSelectedPlatform,selectedPlatform}:Props) => {
  const { data, error } = usePlatforms();

  const platform=data?.results.find(p=>p.id===selectedPlatform);

  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={()=>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
