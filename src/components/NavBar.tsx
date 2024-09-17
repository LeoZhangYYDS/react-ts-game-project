import { GridItem, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <GridItem area="nav" paddingX={6} paddingY={5}>
      <HStack paddingRight={4}>
        <Image src={logo} boxSize="60px" />
        <Text
          whiteSpace="nowrap"
          fontSize="large"
          fontWeight="bold"
          paddingRight={8}
        >
          Game World
        </Text>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </GridItem>
  );
};

export default NavBar;
