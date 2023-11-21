import { Flex, Text } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Teachers() {
  return (
    <Flex my={30} w={"100%"} justify={"center"}>
      <Flex w={"full"} maxW={"7xl"} p={3}>
        <List spacing={3}>
          <ListItem>
            <Text as="b" fontStyle={"italic"} mr={2}>
              Profesores a Cargo
            </Text>
          </ListItem>
          <ListItem>
            <Flex align={"center"}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Flex>
                <Text mr={2}>Profesora:</Text>
                <Text as="b" textDecoration={"underline"} color={"#3182CE"}>
                  Yésica Aylén del Rocío Tintilay
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex align={"center"}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Flex>
                <Text mr={2}>Profesor:</Text>
                <Text as="b" textDecoration={"underline"} color={"#3182CE"}>
                  Gustavo Zoto
                </Text>
              </Flex>
            </Flex>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
