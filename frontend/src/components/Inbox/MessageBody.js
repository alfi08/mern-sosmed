import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const MessageBody = (props) => {
  console.log(props);
  return (
    <Box maxH="360px" minH="360px" overflow="auto" paddingBottom="10px">
      {props.messages.map((msg, i) => (
        <Flex
          justifyContent={msg.from === "ME" ? "flex-end" : "flex-start"}
          key={i}
        >
          <Box
            minH="34px"
            maxW="70%"
            m="10px"
            bg={msg.from === "ME" ? "#ddd" : "#fff"}
            borderRadius="20px"
            border="1px"
            borderColor="#ddd"
            p="10px"
          >
            {msg.body}
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default MessageBody;
