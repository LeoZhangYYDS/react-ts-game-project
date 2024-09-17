import { GridItem, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <GridItem area="nav" paddingX={6} paddingY={5}>
      <HStack paddingRight={4}>
        <Link to="/">
          <HStack>
            <Image src={logo} boxSize="60px" objectFit="cover" />
            <Text
              whiteSpace="nowrap"
              fontSize="large"
              fontWeight="bold"
              paddingRight={8}
            >
              Game World
            </Text>
          </HStack>
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </GridItem>
  );
};

export default NavBar;
