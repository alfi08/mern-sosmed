import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

const PostCardModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link
        onClick={onOpen}
        style={{ color: "black" }}
        _hover={{ textDecor: "none" }}
        mr={{ base: "15px", lg: "30px" }}
        fontSize={{ base: "20px", lg: "17px" }}
        textAlign="center"
      >
        <span style={{ fontWeight: "bold" }}>{props.count}</span> {props.text}
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            borderTop="1px"
            borderColor="#ddd"
            padding={props.padding || ""}
          >
            {props.children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostCardModal;
