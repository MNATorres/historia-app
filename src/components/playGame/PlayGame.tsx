import { Flex, Text } from "@chakra-ui/react";
import Question from "./Question";

export default function PlayGame() {
  return (
    <Flex direction={"column"} p={3}>
      <Text>Pon a prueba tus habilidades</Text>
      <Flex w={"100%"} justify={"center"}>
        <Flex
          w={"full"}
          justify={'center'}
          maxW={"7xl"}
          p={3}
          wrap={'wrap'}
        >
          <Question question="Las principales culturas son las Mayas, Aztecas e Incas." />
          <Question question="La literatura precolombina es el conjunto de textos literarios que fueron creados en el continente americano antes de la llegada de Cristóbal Colón" />
          <Question question="Tikal, fué una ciudad Europea visitada por muchos originarios" />
          <Question question="Milpas, eran ciudades de america donde los pueblos originarios podian comerciar" />
          <Question question="Las terrazas de cultivo desempeñaban un papel crucial en la conservación del agua y la prevensión de la erosión" />
        </Flex>
      </Flex>
    </Flex>
  );
}
