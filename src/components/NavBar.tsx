import { Box, HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import { SwitchColor } from "./SwitchColor";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent="space-between" padding="10px">
        <Link to="/">
          <Image src={Logo} alt="logo" boxSize="60px" objectFit="contain" />
        </Link>
        <SearchInput />
        <SwitchColor />
      </HStack>
    </nav>
  );
};

export default NavBar;
