import Mayas from "./Culturas/Mayas";
import Aztecas from "./Culturas/Aztecas";
import { Box } from "@chakra-ui/react";
import Incas from "./Culturas/Incas";
import Muestra from "./Culturas/Muestra";

export default function Main() {
  return (
    <Box>
      <Mayas />
      <Aztecas />
      <Incas />
      <Muestra />
    </Box>
  );
}
