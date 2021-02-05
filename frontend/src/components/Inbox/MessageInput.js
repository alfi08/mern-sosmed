import React from "react";
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";

const MessageInput = () => {
  return (
    <Box position={{ base: "absolute", md: "static" }} bottom="130px" w="100%">
      <InputGroup size="md" w="100%">
        <Input
          pr="4.5rem"
          placeholder="Enter password"
          _focus={{ border: "1px", borderColor: "#333" }}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default MessageInput;
