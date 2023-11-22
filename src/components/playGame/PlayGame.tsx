import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Question from "./Question";
import { useState } from "react";

export default function PlayGame() {
  const [count, setCount] = useState(0);

  const handleRespuestaCorrecta = () => {
    setCount((prevCount) => prevCount + 20);
  };

  return (
    <Flex id="Jugar" direction={"column"}  p={3}>
      <Text as="b" fontSize={"xx-large"} mt={"46px"}>
        Pon a prueba tus habilidades
      </Text>
      <Text color={"green"} fontSize={20}>
        Puntos: {count}
      </Text>
      {count === 100 && (
        <Box position={'relative'}>
          <Image
            src="https://64.media.tumblr.com/37ee74560af28a4446306daf726c20bb/a89473412058f8f0-86/s500x750/d9f643cbe6e2e877dd782e5fdadd8b56c91b6890.gifv"
            alt="Tienes 100"
            w={"full"}
            maxW={600}
          />
          <Text position={'absolute'} bottom={14} color={"green"} as="b" fontStyle={'italic'}>
            FELICIDADES, TIENES UNA PUNTUACIÓN PERFECTA
          </Text>
        </Box>
      )}
      <Flex w={"100%"} justify={"center"}>
        <Flex w={"full"} justify={"center"} maxW={"7xl"} p={3} wrap={"wrap"}>
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="Las principales culturas son las Mayas, Aztecas e Incas."
            handleCorrectAnswer={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="La literatura precolombina es el conjunto de textos literarios que fueron creados en el continente americano antes de la llegada de Cristóbal Colón"
            handleCorrectAnswer={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="Tikal, fué una ciudad Europea visitada por muchos originarios"
            handleCorrectAnswer={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="Milpas, eran ciudades de america donde los pueblos originarios podian comerciar"
            handleCorrectAnswer={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="Las terrazas de cultivo desempeñaban un papel crucial en la conservación del agua y la prevensión de la erosión"
            handleCorrectAnswer={handleRespuestaCorrecta}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
