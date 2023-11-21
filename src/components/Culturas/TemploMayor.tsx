import { Box, Flex, Text } from "@chakra-ui/react";

export default function TemploMayor() {
  return (
    <Flex id="TemploMayor" w={"100%"} justifyContent={"center"} my={5}>
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          EL TEMPLO MAYOR
        </Text>
        <Text>
          En el corazón de la capital de los aztecas o mexicas se alzaba una
          imponente pirámide dedicada a sus dos grandes dioses, Tlaloc y
          Huitzilopochtli, a quienes se ofrendaba la sangre de miles de víctimas
          sacrificadas.
        </Text>
        <Text>
          El Gran Templo o Templo Mayor (llamado Hueteocalli por los aztecas) se
          sitúa en el centro del Recinto Sagrado. En la parte superior de la
          plataforma de la pirámide de 60 metros de altura, a la que se accedía
          mediante dos tramos de escaleras, estaban los dos templos gemelos. El
          santuario del lado norte estaba dedicado a Tláloc, el dios de la
          lluvia, y el otro, del lado sur, estaba dedicado a Huitzilopochtli, el
          dios de la guerra. El templo de Tláloc marcaba el solsticio de verano
          (simbolizando la temporada lluviosa) mientras que el de
          Huitzilopochtli marcaba el solsticio de invierno (simbolizando la
          temporada seca y el tiempo de las campañas de guerra).
        </Text>
        <Text>
          Los sacrificios, incluidos los humanos, se realizaban en ambos templos
          para honrar y alimentar a los dioses. Un sacrificio típico consistía
          en arrancarle el corazón a la víctima, desollarla, decapitarla, y
          descuartizarla. Acto seguido, el cuerpo se arrojaba cuesta abajo por
          los escalones de la pirámide hasta parar en la base donde había una
          enorme piedra circular con la figura esculpida de Coyolxauhqui, la
          diosa que fue tratada de manera similar por Huitzilopochtli según la
          mitología.
        </Text>
      </Box>
    </Flex>
  );
}
