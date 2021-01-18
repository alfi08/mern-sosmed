import React from "react";
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
import LikeModalItem from "./LikeModalItem";

const LikeModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen}>{props.children}</Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Likes</ModalHeader>
          <ModalCloseButton />
          <ModalBody borderTop="1px" borderColor="#ddd">
            <LikeModalItem />
            <LikeModalItem />
            <LikeModalItem />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LikeModal;
