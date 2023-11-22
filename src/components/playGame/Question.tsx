import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface IQuestionProps {
  question: string;
  buttonTrue: boolean;
  buttonFalse: boolean;
  handleCorrectAnswer: () => void;
}

export default function Question({
  question,
  buttonTrue,
  buttonFalse,
  handleCorrectAnswer,
}: IQuestionProps) {
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(
    null
  );
  const [answered, setAnswered] = useState(false);
  const [isQuestionTrue, setIsQuestionTRue] = useState(false);

  const handleResponse = (isTrue: boolean) => {
    if (correctAnswer === null) {
      if (isTrue) {
        setCorrectAnswer(true);
        setIsQuestionTRue(true);
      } else {
        setCorrectAnswer(false);
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
        correctAnswer === true
          ? "green.200"
          : correctAnswer === false
          ? "red.200"
          : ""
      }
    >
      <Text>{question}</Text>
      <Flex w={"full"} justify={"space-around"}>
        {!answered && (
          <>
            <Button
              w={"40%"}
              onClick={() => {
                handleResponse(buttonTrue);
                if (buttonTrue === true) {
                  handleCorrectAnswer();
                }
                setAnswered(true);
              }}
              disabled={correctAnswer !== null}
            >
              Verdadero
            </Button>
            <Button
              w={"40%"}
              onClick={() => {
                handleResponse(buttonFalse);
                if (buttonFalse === true) {
                  handleCorrectAnswer();
                }
                setAnswered(true);
              }}
              disabled={correctAnswer !== null}
            >
              Falso
            </Button>
          </>
        )}
        {answered && (
          <>
            {isQuestionTrue ? (
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
