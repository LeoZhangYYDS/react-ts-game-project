import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center>
      <VStack>
        <Heading>Oops</Heading>
        <Text>This page does not exist.</Text>
        <Link to="/">Go Back to Home Page</Link>
      </VStack>
    </Center>
  );
};

export default NotFound;
