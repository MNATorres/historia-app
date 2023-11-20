import { Box, Flex, Text } from "@chakra-ui/react";

export default function Muestra() {
  return (
    <Flex id="Muestra" w={"100%"} justifyContent={"center"} my={5}>
      <Box w={"full"} maxW={"7xl"} p={3} mt={"46px"}>
        <Text as="b" fontSize={"xx-large"}>
          Soy una Muestra
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          mollitia totam, expedita aliquam minus magni distinctio fugit
          reiciendis molestiae! Quis porro iure deserunt a, ea voluptatibus
          ipsam! Est, quibusdam veniam!
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          mollitia totam, expedita aliquam minus magni distinctio fugit
          reiciendis molestiae! Quis porro iure deserunt a, ea voluptatibus
          ipsam! Est, quibusdam veniam!
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          mollitia totam, expedita aliquam minus magni distinctio fugit
          reiciendis molestiae! Quis porro iure deserunt a, ea voluptatibus
          ipsam! Est, quibusdam veniam!
        </Text>
      </Box>
    </Flex>
  );
}
