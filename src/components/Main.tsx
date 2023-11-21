import TerrazaDelCultivo from "./Culturas/TerrazaDelCultivo";
import Chinampas from "./Culturas/Chinampas";
import { Box } from "@chakra-ui/react";
import TalaYRoza from "./Culturas/TalaYRoza ";
import PiramideDeKukulcan from "./Culturas/PiramideDeKukulcan";
import Tikal from "./Culturas/Tikal";
import TemploMayor from "./Culturas/TemploMayor";
import LiteraturaPrecolombina from "./Culturas/LiteraturaPrecolombina";

export default function Main() {
  return (
    <Box>
      <Chinampas />
      <TerrazaDelCultivo />
      <TalaYRoza />
      <PiramideDeKukulcan />
      <Tikal />
      <TemploMayor />
      <LiteraturaPrecolombina />
    </Box>
  );
}
