import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Question from "./Question";
import { useState } from "react";
import Excelent from "./Excelent";
import Share from "../Share";
import { GrPowerReset } from "react-icons/gr";

export default function PlayGame() {
  const [count, setCount] = useState(0);
  const [resetGame, setResetGame] = useState(false);

  const handleCorrectAnswer = () => {
    if (count === 100) return;
    setCount((prevCount) => prevCount + 10);
  };

  const handleResetGame = () => {
    setCount(0);
    setResetGame(!resetGame);
  };

  return (
    <Flex id="Jugar" direction={"column"} p={3}>
      <Text as="b" fontSize={"xx-large"} mt={"46px"}>
        Pon a prueba tu conocimiento
      </Text>
      <Box w={"30%"} color={"orange"}>
        <Share />
      </Box>
      <Text color={"green"} fontSize={20}>
        Puntos: {count}
      </Text>
      {count === 100 && <Excelent />}
      <Flex w={"100%"} justify={"center"}>
        <Flex w={"full"} justify={"center"} maxW={"7xl"} p={3} wrap={"wrap"}>
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="Las principales culturas son las Mayas, Aztecas e Incas."
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="La literatura precolombina es el conjunto de textos literarios que fueron creados en el continente americano antes de la llegada de Cristóbal Colón"
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="Tikal, fué una ciudad Europea visitada por muchos originarios"
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="Milpas, eran ciudades de america donde los pueblos originarios podian comerciar"
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="Las terrazas de cultivo desempeñaban un papel crucial en la conservación del agua y la prevensión de la erosión"
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="El sistema de cultivo de los incas era la tala y roza."
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="La pirámide de Kukulcán es uno de los más altos y notables de la arquitectura maya. "
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={false}
            buttonFalse={true}
            question="Las Chinampas son ciudades aztecas"
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="En el Templo Mayor se realizaban sacrificios humanos"
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
          <Question
            buttonTrue={true}
            buttonFalse={false}
            question="El objetivo de la literatura precolombina es preservar tradiciones y costumbres."
            handleCorrectAnswer={handleCorrectAnswer}
            resetGame={resetGame}
          />
        </Flex>
      </Flex>
      {count === 100 && <Excelent />}
      <Button
        m={"0 auto"}
        w={{ base: "full", md: "30%", lg: "30%", xl: "30%" }}
        onClick={handleResetGame}
        color={'green'}
      >
        <GrPowerReset style={{fontSize: 20, marginRight: 5}} />
        Volver a Jugar
      </Button>
    </Flex>
  );
}
