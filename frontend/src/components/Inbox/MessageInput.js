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
    <InputGroup size="md" w="90%" margin="0 auto" mb="10px">
      <Input pr="4.5rem" placeholder="Enter password" />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm">
          send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default MessageInput;
