import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";

const SideHeader = () => {
  return (
    <Flex
      borderBottom="1px"
      borderColor="#8e8e8e"
      p="10px"
      alignItems="center"
      height="50px"
    >
      {/* username */}
      <Box textAlign="center" fontWeight="bold" w="85%">
        alfi08
      </Box>
      {/* make new message action */}
      <Box w="15%" textAlign="right" cursor="pointer">
        <Icon as={BsPencilSquare} fontSize="25px" />
      </Box>
    </Flex>
  );
};

export default SideHeader;
