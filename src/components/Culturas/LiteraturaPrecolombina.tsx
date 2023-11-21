import { Box, Flex, Image, Text } from "@chakra-ui/react";
import literatura from "./../../assets/literatura.jpg";

export default function LiteraturaPrecolombina() {
  return (
    <Flex
      id="LiteraturaPrecolombina"
      w={"100%"}
      justifyContent={"center"}
      my={5}
    >
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          LITERATURA PRECOLOMBINA
        </Text>
        <Text>
          La literatura precolombina es el conjunto de textos literarios que
          fueron creados en el continente americano antes de la llegada de
          Cristóbal Colón y los otros conquistadores europeos, con la
          consiguiente colonización. Todas estas creaciones parten de la
          tradición oral y de la memoria colectiva de los pueblos y
          civilizaciones originarias de América.
        </Text>
        <Text>
          Con el paso del tiempo, y durante la época colonial, se recuperaron
          inscripciones, códigos y diversos textos, generando una escritura
          fonética de las lenguas originarias y retomando leyendas, mitos,
          narraciones y rituales.
        </Text>
        <Text>
          Con el choque de culturas y la necesidad de recuperar tradiciones y
          legados, por parte de los indígenas, así como de evangelizar e imponer
          una nueva cultura, por parte de los frailes y misioneros, se fue
          construyendo el concepto de literatura precolombina, para agrupar
          expresiones culturales de diferentes pueblos.
        </Text>

        <Image w={{ base: "100%", md: "100%", lg: 600, xl: 600 }} src={literatura} alt="TerrazaDelCultivo" />
        <Text as="b" fontStyle={"italic"}>
          Finalidad de la literatura precolombina
        </Text>
        <Text>
          La literatura precolombina no persiguió únicamente fines estéticos,
          sino que cumplía funciones religiosas, históricas, organizativas,
          proféticas y ceremoniales. Además, tenía el objetivo de preservar
          tradiciones y costumbres, así como de demostrar conocimientos y servir
          como enseñanza.
        </Text>
        <Text>
          En esta literatura se tuvo una estrecha relación con la naturaleza,
          como elemento indispensable en la vida humana. Todos los elementos
          naturales se integraron a la construcción de deidades, mitos y
          leyendas que acompañaban las historias de los pueblos originarios,
          sirviendo como punto en común para la memoria colectiva y el
          aprendizaje.
        </Text>
      </Box>
    </Flex>
  );
}
