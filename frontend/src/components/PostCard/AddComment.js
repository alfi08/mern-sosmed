import React from "react";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";

const AddComment = () => {
  return (
    <InputGroup size="sm">
      <Input variant="flushed" placeholder="Add Comment" p="10px" />
      <InputRightElement width="4.5rem">
        <Button
          size="sm"
          bg="transparent"
          color="blue.500"
          _hover={{ bg: "transparent" }}
        >
          Post
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default AddComment;
