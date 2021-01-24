import React from "react";
import {
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const AddComment = () => {
  return (
    <Box>
      <InputGroup size="sm">
        <Input variant="flushed" placeholder="Add Comment" />
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
    </Box>
  );
};

export default AddComment;
