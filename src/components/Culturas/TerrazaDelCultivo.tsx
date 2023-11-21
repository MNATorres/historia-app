import { Box, Flex, Image, Text } from "@chakra-ui/react";
import cultivoInca from './../../assets/cultivoInca.png'

export default function TerrazaDelCultivo() {
  return (
    <Flex id="TerrazaDelCultivo" w={"100%"} justifyContent={"center"} my={5}>
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          TERRAZA DE CULTIVO
        </Text>
        <Text>
          Las terrazas de los Incas, conocidas como “andenes”, son escalones
          tallados en las laderas de las montañas, pero los andenes no solo son
          obras de arte arquitectónico, también son una obra maestra de
          ingeniería agrícola.
        </Text>
        <Text>
          Este sistema permitió a los Incas cultivar en terrenos que, en
          principio, parecían totalmente inhóspitos para la agricultura. En las
          laderas escarpadas de las montañas, construyeron muros de piedra y
          rellenaron los espacios con tierra y compost, creando superficies
          planas para el cultivo.
        </Text>
        <Text>
          Las terrazas no solo maximizaron el espacio de cultivo en una región
          montañosa, sino que también desempeñaron un papel crucial en la
          conservación del agua y la prevención de la erosión. Cada nivel
          recogía el agua que se escurría del nivel superior, permitiendo un uso
          eficiente de este valioso recurso.
        </Text>
        <Text>
          Gracias a este sistema, los Incas lograron cultivar una amplia
          variedad de alimentos, desde maíz hasta patatas, que alimentaron a un
          imperio floreciente.
        </Text>
        <Image w={{ base: "100%", md: "100%", lg: 600, xl: 600 }} src={cultivoInca} alt="TerrazaDelCultivo" />
      </Box>
    </Flex>
  );
}
