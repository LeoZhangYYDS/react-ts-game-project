import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingRight={4}>
      <Image src={logo} boxSize="60px" />
      <Text whiteSpace="nowrap" fontSize="large" fontWeight="bold" paddingRight={8}>
        Game World
      </Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
