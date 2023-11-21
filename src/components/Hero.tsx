import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import Azteca from "./../assets/fondoazteca.jpg";
import Maya from "./../assets/fondoMaya.jpg";
import Inca from "./../assets/fondoInca.jpg";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Hero() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Cultura",
      text: "MAYA",
      image: Maya,
    },
    {
      title: "Cultura",
      text: "AZTECA",
      image: Azteca,
    },

    {
      title: "Cultura",
      text: "INCA",
      image: Inca,
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
      id="inicio"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        color={"#3182CE"}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        color={"#3182CE"}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                w={"full"}
                pr={8}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  color={"white"}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {card.title}
                </Heading>
                <Text
                  borderRadius={3}
                  fontSize={{ base: "80px", lg: "70px" }}
                  fontWeight={"bold"}
                  color={"#3182CE"}
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
