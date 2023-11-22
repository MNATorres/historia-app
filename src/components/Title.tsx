import { Box, Flex } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";


const Title = () => {
    
  return (
    <Flex w={'100%'} justify={'center'} height={'87px'}>
      <Box textAlign={'center'} w={"full"} maxW={"7xl"} p={3}>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Aprende sobre la cultura de los Mayas",
            2000,
            "Aprende sobre la cultura de los Aztecas",
            2000,
            "Aprende sobre la cultura de los Incas",
            2000,
          ]}
          speed={50}
          style={{ fontSize: "2em", fontWeight:'bold', color:'#5d5c5c' }}
          repeat={Infinity}
        />
      </Box>
    </Flex>
  );
};

export default Title;
