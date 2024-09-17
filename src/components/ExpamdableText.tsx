import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpamdableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  //set limit
  const limit = 300;

  if (!children) return null;

  //当小于的时候直接显示
  if (children.length < limit) return <Text>{children}</Text>;

  //当不小于的时候
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)} //取反
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpamdableText;
