import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="350px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;

//给每个Game card 和 loading Skeleton一个同样大小的容器
