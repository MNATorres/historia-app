import { Box, Flex, Image, Text } from "@chakra-ui/react";
import tikal from "./../../assets/tikal.jpeg";

export default function Tikal() {
  return (
    <Flex id="Tikal" w={"100%"} justifyContent={"center"} my={5}>
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          TIKAL
        </Text>
        <Text>La metrópolis maya</Text>
        <Text>
          El nombre Tikal puede ser derivación de las palabras ti ak'al, en el
          idioma maya yucateco, que significa «en el pozo de agua».
          Aparentemente, el nombre fue aplicado por cazadores y viajeros de la
          región y se refería a una de las antiguas reservas de agua del sitio.
          Una explicación alternativa sugiere que el nombre viene del idioma
          maya itzá y que significa «lugar de las voces» o «lugar de las
          lenguas».
        </Text>
        <Text>
          Tikal no solo fue una de las ciudades mayas más grandes y antiguas,
          sino también un ejemplo muy representativo del auge y la enigmática
          caída de esta civilización durante su período clásico, entre los
          siglos III y X. Procedentes del altiplano de Guatemala, los
          antepasados de los mayas emigraron al este (Chiapas y Tabasco, en
          México) y oeste (tierras bajas de Guatemala, Honduras y Belice) en el
          II milenio a. C. A su paso fundaron aldeas, algunas de las cuales se
          transformarían siglos más tarde en las primeras ciudades de la cultura
          maya. Una de ellas fue Tikal, situada en el corazón del bosque
          tropical del Petén, al noreste de Guate­mala, y habitada desde 800 a.
          C.
        </Text>

        <Image
          w={{ base: "100%", md: "100%", lg: 600, xl: 600 }}
          src={tikal}
          alt="TerrazaDelCultivo"
        />
      </Box>
    </Flex>
  );
}
