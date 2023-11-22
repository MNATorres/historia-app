import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";

const students = [
  "ARIAS, Matias",
  "CARDOZO, Franco",
  "COLQUE, Maximiliano",
  "DIAZ, Carlos",
  "RAMOS, Ariel",
  "SAMBRANA, Nicolás",
  "ALVAREZ, Lucía",
  "CASTILLO, Jaquelina",
  "FERNANDEZ, Briana",
  "GARCIA, Antonela",
  "LAZARO, Xiomara",
  "SAJAMA, Alejandra",
  "Toconás, Esmeralda",
  "Vaca, Tatiana",
];

export default function ListStudents() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, _] = useState<any>("left");

  return (
    <>
      <Text
        color={"#3182CE"}
        textStyle={"italic"}
        textDecor={"underline"}
        cursor={"pointer"}
        onClick={onOpen}
      >
        Alumnos Participantes
      </Text>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Alumnos/as:</DrawerHeader>
          <DrawerBody>
            <UnorderedList>
              {students.map((student, i) => {
                return <ListItem key={i}>{student}</ListItem>;
              })}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
