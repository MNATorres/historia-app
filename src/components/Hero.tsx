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
      title: "MAYA",
      text: "Los Mayas ocuparon la península de Yucatán y sus alrededores, donde levantaron pirámides, monumentos y templos. Vivieron en estas regiones entre los siglos IV y IX a.C. ",
      image: Maya,
    },
    {
      title: "AZTECA",
      text: "Los Aztecas se ubicaron en el actual territorio mexicano, donde fundaron Tenochtitlan. Fueron una civilización que se desarrolló entre los siglos XIV y XVI.  Eran un pueblo guerrero y conquistador que logró formar un imperio en Mesoamérica.",
      image: Azteca,
    },
    {
      title: "INCA",
      text: "Los Incas fueron una civilización que habitó la región andina entre los siglos XII y XVI. Organizaron un imperio liderado por un monarca sagrado llamado Sapa Inca. Tenían una sociedad estructurada en torno a la vida comunal, a través de los ayllus.",
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
                  fontSize={{ base: "16px", lg: "22px" }}
                  color={'white'}
                  textShadow="-2px 1px 0px rgb(0 0 0)" 
                  
                >
                  "{card.text}"
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
