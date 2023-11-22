import { Flex, Text } from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";
import ListStudents from "./ListStudents";

export default function Students() {
  return (
    <Flex my={30} w={"100%"} justify={"center"}>
      <Flex w={"full"} maxW={"7xl"} p={3}>
        <List spacing={3}>
          <ListItem>
            <Text color={""} as="b" fontStyle={"italic"} mr={2}>
              Estudiantes
            </Text>
          </ListItem>
          <ListItem display={"flex"}>
            <Text mr={2}>Ir a</Text>
            <ListStudents />
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
