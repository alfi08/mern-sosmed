import React from "react";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";

const MessageHeader = (props) => {
  return (
    <Flex
      justifyContent="space-between"
      height="50px"
      borderBottom="1px"
      borderColor="#8e8e8e"
      alignItems="center"
      px="20px"
    >
      <Box fontWeight="bold">{props.username} </Box>
      <Box>
        <Icon as={BsInfoCircle} fontSize="25px" />
      </Box>
    </Flex>
  );
};

export default MessageHeader;
