import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

const PostCardModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen} style={{ color: "gray" }}>
        {props.text}
      </Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{props.title}</ModalHeader>
          <ModalCloseButton />
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
