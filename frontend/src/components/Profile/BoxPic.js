import React, { useState } from "react";
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

import { useHistory } from "react-router-dom";

const BoxPic = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHover, setIsHover] = useState(false);
  const history = useHistory();

  const hoverHandlre = (hover) => {
    setIsHover(hover);
  };

  const clickHandle = () => {
    history.push("/p/12");
  };

  return (
    <>
      <Link
        onClick={props.isUseModal ? onOpen : clickHandle} // if view is for desktop then open modal, if mobile open to url with useHistory()
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
