import React, { useState, useEffect } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostBody from "./PostBody";
import Comments from "./Comments";
import AddComment from "./AddComment";

import { POSTS_DUMMY } from "../../DB";

const PostCardDetail = (props) => {
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
      <Flex w="100%" border="1px" borderColor="gray.300">
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
    )
  );
};

export default PostCardDetail;
