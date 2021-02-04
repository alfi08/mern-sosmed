import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Link,
  Img,
  Box,
} from "@chakra-ui/react";

const BoxPic = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHover, setIsHover] = useState(false);

  const hoverHandlre = (hover) => {
    setIsHover(hover);
  };

  return (
    <>
      <Link
        onClick={props.isUseModal ? onOpen : ""}
        href={!props.isUseModal && "http://localhost:3000/p/12"}
        style={{ color: "black" }}
        _hover={{ textDecor: "none" }}
        mr={props.mr || "30px"}
        mb={props.mr || "0"}
        w="32%"
        h={{ base: "200px", md: "293px" }}
      >
        <Box position="relative" w="100%" h="100%">
          <Img
            src={props.src}
            w="100%"
            h="100%"
            onMouseOver={() => hoverHandlre(true)}
            position="absolute"
          />
          {isHover && (
            <Box
              bg="rgba(0,0,0,.5)"
              w="100%"
              h="100%"
              position="absolute"
              onMouseOut={() => hoverHandlre(false)}
            ></Box>
          )}
        </Box>
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            borderTop="1px"
            borderColor="#ddd"
            padding={props.padding || "0"}
          >
            {props.children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BoxPic;
