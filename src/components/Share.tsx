import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ShareQR from "./../assets/compartir.jpeg";

export default function Share() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text w={"full"} onClick={onOpen}>
        Compartir
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={ShareQR} alt={"compartir"} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
