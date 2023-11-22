import { Flex, Text } from "@chakra-ui/react";
import Question from "./Question";
import { useState } from "react";

export default function PlayGame() {
  const [count, setCount] = useState(0);

  const handleRespuestaCorrecta = () => {
    setCount((prevCount) => prevCount + 20);
  };

  return (
    <Flex direction={"column"} p={3}>
      <Text as="b" fontSize={"xx-large"}>
        Pon a prueba tus habilidades
      </Text>
      <Text color={"green"} fontSize={20}>
        Puntos: {count}
      </Text>

      <Flex w={"100%"} justify={"center"}>
        <Flex w={"full"} justify={"center"} maxW={"7xl"} p={3} wrap={"wrap"}>
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="Las principales culturas son las Mayas, Aztecas e Incas."
            handleRespuestaCorrecta={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="La literatura precolombina es el conjunto de textos literarios que fueron creados en el continente americano antes de la llegada de Cristóbal Colón"
            handleRespuestaCorrecta={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="Tikal, fué una ciudad Europea visitada por muchos originarios"
            handleRespuestaCorrecta={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="Milpas, eran ciudades de america donde los pueblos originarios podian comerciar"
            handleRespuestaCorrecta={handleRespuestaCorrecta}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="Las terrazas de cultivo desempeñaban un papel crucial en la conservación del agua y la prevensión de la erosión"
            handleRespuestaCorrecta={handleRespuestaCorrecta}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
