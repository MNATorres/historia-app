import { Box, Flex, Image, Text } from "@chakra-ui/react";
import kukulcan from "../../assets/kukulcan.jpeg";

export default function PiramideDeKukulcan() {
  return (
    <Flex id="PiramideDeKukulcan" w={"100%"} justifyContent={"center"} my={5}>
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          PIRÁMIDE DE KUKULCÁN
        </Text>
        <Text>
          El Castillo o Pirámide de Kukulcán. Uno de los ejemplos más altos y
          notables de la arquitectura maya, fue construido durante el apogeo de
          la cultura Itza-Cocom, durante la decadencia de Mayapán. Es una
          pirámide de cuatro lados, con un templo rectangular en la parte
          superior y simboliza el calendario solar maya, un monumento al tiempo.
        </Text>
        <Text>
          Su base es cuadrada, tiene 55 metros por lado y 30 de altura. Cuenta
          con nueve cuerpos en talud y una escalinata por cada lado. La
          principal exhibe cabezas de serpiente al inicio de sus alfardas o
          muretes que contienen los escalones.
        </Text>
        <Text>
          Durante los equinoccios de primavera y otoño, al topar los rayos de
          sol en las alfardas de la escalera principal, se produce un
          espectáculo increíble de luz y sombra. Se van formando triángulos de
          luz producto de la sombra que proyectan los nueve cuerpos o
          plataformas de la pirámide.
        </Text>
        <Text>
          Esa sombra, conforme avanza el sol, recorre el muro deslizándose hacia
          abajo hasta iluminar la cabeza de una de las serpientes que se
          encuentran al inicio de la escalinata. Según los investigadores, este
          efecto simboliza el descenso del dios Kukulcán a la tierra, para
          comenzar así el ciclo agrícola.
        </Text>
        <Image w={{ base: "100%", md: "100%", lg: 600, xl: 600 }} src={kukulcan} alt="roza" />
      </Box>
    </Flex>
  );
}
