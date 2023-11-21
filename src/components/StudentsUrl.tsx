import { Flex, Text } from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function StudentsUrl() {
  return (
    <Flex my={30} w={"100%"} justify={"center"}>
      <Flex w={"full"} maxW={"7xl"} p={3}>
        <List spacing={3}>
          <ListItem>
            <Text as="b" fontStyle={"italic"} mr={2}>
              Estuiantes
            </Text>
          </ListItem>
          <ListItem>
            <Link to={"/estudiantes"}>
              <Text as="b" textDecoration={"underline"} color={"#3182CE"}>
                Ir a la lista de estudiantes
              </Text>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
