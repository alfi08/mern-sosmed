import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

const NewPost = () => {
  return (
    <Center mt="100px">
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
    </Center>
  );
};

export default NewPost;
