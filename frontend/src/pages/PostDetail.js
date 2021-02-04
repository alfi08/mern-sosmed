import React from "react";
import { Box, Center } from "@chakra-ui/react";
import PostCardDetail from "../components/PostCard/PostCardDetail";
import PostCard from "../components/PostCard/PostCard";
import { POSTS_DUMMY } from "../DB";

const PostDetail = () => {
  return (
    <Center>
      <Box w="900px" mt="20px">
        <PostCardDetail
          {...POSTS_DUMMY[0]}
          display={{ base: "none", lg: "flex" }}
        />
        <PostCard
          {...POSTS_DUMMY[0]}
          display={{ base: "block", lg: "none" }}
          my="0"
        />
      </Box>
    </Center>
  );
};

export default PostDetail;
