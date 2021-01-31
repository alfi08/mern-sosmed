import React, { useState, useEffect } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

import PostHeader from "../components/PostCard/PostHeader";
import PostImage from "../components/PostCard/PostImage";
import PostActions from "../components/PostCard/PostActions";
import PostBody from "../components/PostCard/PostBody";
import Comments from "../components/PostCard/Comments";
import AddComment from "../components/PostCard/AddComment";

import { POSTS_DUMMY } from "../DB";

const PostDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [post, setPost] = useState(false);

  const likeToggleHandler = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setPost(POSTS_DUMMY[0]);
    setIsLiked(post.isLiked);
  }, [post]);

  return (
    post && (
      <Center>
        <Flex w="900px" h="450px" border="1px" borderColor="gray.300" mt="20px">
          {/* image */}

          <Box>
            <PostImage src={post.postImage} />
          </Box>
          <Flex w="600px" flexDirection="column" justifyContent="space-between">
            <Box>
              <PostHeader src={post.profileImage} username={post.username} />
              <Box px="10px" overflow="auto" height="280px">
                <PostBody
                  isFollow={post.isFollow}
                  username={post.username}
                  description={post.description}
                  comment={post.comment}
                />

                <Comments comments={post.comment} />
              </Box>
            </Box>

            <Box>
              <PostActions
                likeHandler={likeToggleHandler}
                isLiked={isLiked}
                like={post.like}
              />
              <AddComment />
            </Box>
          </Flex>
        </Flex>
      </Center>
    )
  );
};

export default PostDetail;
