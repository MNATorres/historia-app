import { Box, Image, Text } from "@chakra-ui/react";

export default function Excelent() {
  return (
    <Box position={"relative"}>
      <Image
        src="https://64.media.tumblr.com/37ee74560af28a4446306daf726c20bb/a89473412058f8f0-86/s500x750/d9f643cbe6e2e877dd782e5fdadd8b56c91b6890.gifv"
        alt="Tienes 100"
        w={"full"}
        maxW={600}
      />
      <Text
        position={"absolute"}
        bottom={14}
        color={"green"}
        as="b"
        fontStyle={"italic"}
      >
        FELICIDADES, TIENES UNA PUNTUACIÓN PERFECTA
      </Text>
    </Box>
  );
}
