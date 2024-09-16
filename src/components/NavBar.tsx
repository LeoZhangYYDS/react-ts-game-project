import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
