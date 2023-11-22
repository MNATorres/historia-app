import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface IQuestionProps {
  question: string;
  buttonTrue: boolean;
  buttonFalse: boolean;
  handleRespuestaCorrecta: () => void;
}

export default function Question({
  question,
  buttonTrue,
  buttonFalse,
  handleRespuestaCorrecta,
}: IQuestionProps) {
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<boolean | null>(
    null
  );
  const [respondido, setRespondido] = useState(false);
  const [isQuestionTRue, setIsQuestionTRue] = useState(false);

  const handleRespuesta = (esVerdadero: boolean) => {
    if (respuestaCorrecta === null) {
      if (esVerdadero) {
        setRespuestaCorrecta(true);
        setIsQuestionTRue(true);
      } else {
        setRespuestaCorrecta(false);
        setIsQuestionTRue(false);
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
        {!respondido && (
          <>
            <Button
              w={"40%"}
              onClick={() => {
                handleRespuesta(buttonTrue);
                if (buttonTrue === true) {
                  handleRespuestaCorrecta();
                }
                setRespondido(true);
              }}
              disabled={respuestaCorrecta !== null}
            >
              Verdadero
            </Button>
            <Button
              w={"40%"}
              onClick={() => {
                handleRespuesta(buttonFalse);
                if (buttonFalse === true) {
                  handleRespuestaCorrecta();
                }
                setRespondido(true);
              }}
              disabled={respuestaCorrecta !== null}
            >
              Falso
            </Button>
          </>
        )}
        {respondido && (
          <>
            {isQuestionTRue ? (
              <Flex align={"center"} color={"green"}>
                <FaCheck />
                Respuesta Correcta
              </Flex>
            ) : (
              <Flex align={"center"} color={"red"}>
                <IoClose style={{ fontSize: 23 }} />
                Respuesta Incorrecta
              </Flex>
            )}
          </>
        )}
      </Flex>
    </Flex>
  );
}