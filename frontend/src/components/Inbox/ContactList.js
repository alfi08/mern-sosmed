import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import PicProfile from "../UI/PicProfile";

const ContactList = (props) => {
  return (
    <Flex
      py="10px"
      borderTop={props.bt}
      borderColor="#8e8e8e"
      alignItems="center"
      px="5px"
      cursor="pointer"
      bg={props.isActive && "#ddd"}
      onClick={() => props.onClick(props.index)}
    >
      <PicProfile />
      <Box ml="10px">
        <Box fontWeight="bold">{props.username}</Box>
        <Box>
          {props.message[props.message.length - 1].body.substr(0, 10) +
            (props.message[props.message.length - 1].body.length > 10
              ? " ..."
              : "")}
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactList;
