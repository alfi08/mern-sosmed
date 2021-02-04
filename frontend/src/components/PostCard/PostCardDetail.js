import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostBody from "./PostBody";
import Comments from "./Comments";
import AddComment from "./AddComment";

const PostCardDetail = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeToggleHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    props && (
      <Flex
        w="100%"
        border="1px"
        borderColor="gray.300"
        display={props.display || "flex"}
      >
        {/* image */}

        <Box>
          <PostImage src={props.postImage} />
        </Box>
        <Flex w="600px" flexDirection="column" justifyContent="space-between">
          <Box>
            <PostHeader src={props.profileImage} username={props.username} />
            <Box px="10px" overflow="auto" height="280px">
              <PostBody
                isFollow={props.isFollow}
                username={props.username}
                description={props.description}
                comment={props.comment}
              />

              <Comments comments={props.comment} />
            </Box>
          </Box>

          <Box>
            <PostActions
              likeHandler={likeToggleHandler}
              isLiked={isLiked}
              like={props.like}
            />
            <AddComment />
          </Box>
        </Flex>
      </Flex>
    )
  );
};

export default PostCardDetail;
