import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.6s  ",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

//给每个Game card 和 loading Skeleton一个同样大小的容器
