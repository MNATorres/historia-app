import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

interface IQuestionProps {
  question: string;
}

export default function Question({ question }: IQuestionProps) {
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<boolean | null>(
    null
  );

  const handleRespuesta = (esVerdadero: boolean) => {
    if (respuestaCorrecta === null) {
      if (esVerdadero) {
        setRespuestaCorrecta(true);
      } else {
        setRespuestaCorrecta(false);
      }
    }
  };

  return (
    <Flex
      m={2}
      textAlign={"center"}
      w={300}
      justify={"space-around"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      borderRadius={8}
      height={200}
      direction={"column"}
      px={1}
      bg={
        respuestaCorrecta === true
          ? "green.200"
          : respuestaCorrecta === false
          ? "red.200"
          : ""
      }
    >
      <Text>{question}</Text>
      <Flex w={"full"} justify={"space-around"}>
        <Button
          w={"40%"}
          onClick={() => handleRespuesta(true)}
          disabled={respuestaCorrecta !== null}
        >
          Verdadero
        </Button>
        <Button
          w={"40%"}
          onClick={() => handleRespuesta(false)}
          disabled={respuestaCorrecta !== null}
        >
          Falso
        </Button>
      </Flex>
    </Flex>
  );
}
