import { Box } from "@chakra-ui/react";
import FooterStudents from "../components/PageStudents/FooterStudents";
import HeaderStudents from "../components/PageStudents/HeaderStudents";
import ListStudentes from "../components/PageStudents/ListStudentes";
import Teachers from "../components/Teachers";

export default function Students() {
  return (
    <Box>
      <HeaderStudents />
      <ListStudentes />
      <Teachers />
      <FooterStudents />
    </Box>
  );
}
