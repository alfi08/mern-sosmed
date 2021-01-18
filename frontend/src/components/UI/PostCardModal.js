import React, { useEffect, useState } from "react";
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

import Comments from "./Comments";

const PostCardModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(props);
  return (
    <>
      <Link onClick={onOpen} style={{ color: "gray" }}>
        {props.children}
      </Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody borderTop="1px" borderColor="#ddd">
            <Comments />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostCardModal;
