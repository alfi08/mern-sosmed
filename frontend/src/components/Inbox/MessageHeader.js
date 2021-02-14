import React from "react";
import {Link} from "react-router-dom";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";
import {IoIosArrowBack} from "react-icons/io";
import PicProfile from "../UI/PicProfile";


const MessageHeader = (props) => {
  return (
    <Flex
      justifyContent="space-between"
      height="50px"
      borderBottom="1px"
      borderColor="#8e8e8e"
      alignItems="center"
      px="10px"
    >
      <Flex>
        <Box onClick={() => props.selectMsgHandler(false)} mr="10px">
          <Icon as={IoIosArrowBack} fontSize="25px" />
        </Box>
        <PicProfile />
        <Box fontWeight="bold" ml="10px">
          {props.username}{" "}
        </Box>
      </Flex>
      <Box>
        <Icon as={BsInfoCircle} fontSize="25px" />
      </Box>
    </Flex>
  );
};

export default MessageHeader;
