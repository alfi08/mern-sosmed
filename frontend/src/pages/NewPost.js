import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

const NewPost = () => {
  return (
    <Box d="flex" justifyContent="center" >
      <Box boxShadow="dark-lg" p="20px">
        <form>
          <Heading size="md" textAlign="center">
            New Post
          </Heading>
          <Input type="file" my="20px" />
          <Textarea placeholder="Description"></Textarea>
          <Button bg="blue.400" mt="15px" w="100%">
            POST
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default NewPost;
