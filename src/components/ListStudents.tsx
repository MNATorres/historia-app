import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
  ListItem,
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
  "TOCONÁS, Esmeralda",
  "VACA, Tatiana",
];

interface IListStudentsProps {
  title: string;
  color: string;
  textDecor:string;
}

export default function ListStudents({ title, color, textDecor }: IListStudentsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, _] = useState<any>("left");

  return (
    <>
      <Text
        color={color}
        textStyle={"italic"}
        textDecor={textDecor}
        cursor={"pointer"}
        onClick={onOpen}
      >
        {title}
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
