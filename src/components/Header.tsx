import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "./../assets/logo.png";
import { useNavigation } from "../hooks/useNavigation";
import ListStudents from "./ListStudents";
import Share from "./Share";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { scrollToSection } = useNavigation();

  return (
    <>
      <Box
        bg={"#3182cee3"}
        px={4}
        color={"white"}
        position={"fixed"}
        w={"100%"}
        top={0}
        zIndex={99}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image w={50} src={Logo} alt="HIstoria" />
            </Box>
          </HStack>
          <Flex direction={"column"} alignItems={"center"}>
            <Text fontSize="sm" as="b">
              Culturas Precolombinas
            </Text>
            <Text fontSize="sm" as="b">
              de America
            </Text>
          </Flex>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton rounded={"full"} cursor={"pointer"} minW={0}>
                <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  onClick={isOpen ? onClose : onOpen}
                  bg={"none"}
                  fontSize={30}
                  color={"white"}
                />
              </MenuButton>
              <MenuList color={"black"}>
                <MenuItem onClick={() => scrollToSection("Chinampas")}>
                  Chinampas
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("TerrazaDelCultivo")}>
                  Terraza Del Cultivo
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("TalaYRoza")}>
                  Tala Y Roza
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("PiramideDeKukulcan")}>
                  Pirámide De Kukulcán
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("Tikal")}>
                  Tikal
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("TemploMayor")}>
                  El Templo Mayor
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("LiteraturaPrecolombina")}
                >
                  Literatura Precolombina
                </MenuItem>
                <MenuItem color={"orange"}>
                  <Share />
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("Jugar")}
                  color={"green"}
                >
                  Juega un juego :D
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <ListStudents
                    color="#3182CE"
                    textDecor="underline"
                    title="Lista de Estudiantes"
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
