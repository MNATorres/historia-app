import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import chinampa from "./../../assets/chinampa.jpg";

export default function Chinampas() {
  return (
    <Flex id="Chinampas" w={"100%"} justifyContent={"center"} my={5}>
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          CHINAMPAS
        </Text>
        <Text>
          Es un método de cultivo. Son parcelas que flotan sobre aguas poco
          profundas. Los Aztecas utilizan las Chinampas sobre el lago Texcoco.
          Con este sistema llevaban la tierra al agua.
        </Text>
        <Text as="b" fontStyle={"italic"}>
          Proceso:
        </Text>
        <OrderedList pt={5}>
          <ListItem>
            Clavar cuatro estacas en las tierras pantanosas formando un
            rectángulo.
          </ListItem>
          <ListItem>Llenarlo con varas y tiras de pasto.</ListItem>
          <ListItem>
            Cubrir con lodo: las estacas arraigaban y retenían la tierra en los
            bordes.
          </ListItem>
          <ListItem>
            La chinampa absorbe el agua del lago y el lodo servía de abono; de
            este modo sembraban varias veces al año.
          </ListItem>
        </OrderedList>
        <Image src={chinampa} alt="Chinampa" />
      </Box>
    </Flex>
  );
}
