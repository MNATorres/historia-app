import { Box, Flex, Image, Text } from "@chakra-ui/react";
import roza from "../../assets/Roza.jpg";

export default function TalaYRoza() {
  return (
    <Flex id="TalaYRoza" w={"100%"} justifyContent={"center"} my={5}>
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          TALA Y ROZA
        </Text>
        <Text>Sistema de cultivo</Text>
        <Text>
          El fundamento de la economía de los mayas era la agricultura en base a
          la roza. La técnica de roza consiste en preparar mediante la tala e
          incendio de un sector de la selva, para despejar las malezas y
          arbustos previamente a la siembra. Se cultiva ese predio varios años
          hasta que disminuye la producción por agotamiento del suelo. Luego se
          prepara otro sector de la selva del mismo modo, y no se vuelve a
          sembrar el primero hasta que esa tierra no haya recuperado la
          vegetación.
        </Text>
        <Text>
          Por eso, este sistema agrícola requería de un amplio territorio. Como
          consecuencia, las ciudades-estado se hallaban dispersas, con terrenos
          libres a su alrededor.
        </Text>
        <Text>
          En sus campos, llamados milpas, cultivaron principalmente maíz,
          calabaza, ají, cacao, tomate, pimienta, porotos y orégano.
        </Text>
        <Image src={roza} alt="roza" />
      </Box>
    </Flex>
  );
}
