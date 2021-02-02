import React from "react";
import { Box, Center } from "@chakra-ui/react";
import PostCardDetail from "../components/PostCard/PostCardDetail";

const PostDetail = () => {
  return (
    <Center>
      <Box w="900px" mt="20px">
        <PostCardDetail />
      </Box>
    </Center>
  );
};

export default PostDetail;
