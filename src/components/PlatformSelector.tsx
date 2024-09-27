import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = data?.results.find((p) => p.id === selectedPlatform);

  const setPlatformId = useGameQueryStore((s) => s.setPlatofrmId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
