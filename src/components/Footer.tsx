import {
  Box,
  Flex,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import Logo from "./../assets/logo.png";
import { useNavigation } from "../hooks/useNavigation";
import { Link } from "react-router-dom";

export default function Footer() {
  const { scrollToSection } = useNavigation();

  return (
    <Box bg={"#3182CE"} color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Flex align={"center"}>
          <Image mx={2} src={Logo} w={70} alt="Colegio Nuevo Horizonte" />
          <Flex as="b" fontSize={"20px"} direction={"column"} align={"center"}>
            <Text>Colegio Nuevo</Text>
            <Text>Horizonte</Text>
          </Flex>
        </Flex>
        <Stack direction={"row"} spacing={6}>
          <Box as="a" onClick={() => scrollToSection("inicio")}>
            Inicio
          </Box>
          <Box as="a" onClick={() => scrollToSection("Chinampas")}>
            Culturas
          </Box>
          <Box>
            <Link to={"/estudiantes"}>Alumnos</Link>
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex direction={"column"} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <FaHeart style={{ color: "red", marginRight: "5px" }} />
              <Text>Gracias por llegar hasta el final</Text>
            </Flex>
            <Text as="b">2023</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
