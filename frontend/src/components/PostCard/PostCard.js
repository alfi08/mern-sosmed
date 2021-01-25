import React, { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostBody from "./PostBody";

const PostCardHome = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeToggleHandler = () => {
    console.log("cek");
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(props.isLiked);
  }, [props.isLiked]);

  return (
    <Center>
      <Box
        boxShadow="sm"
        w={{ md: "650px", sm: "85%" }}
        my="5"
        border="1px"
        borderColor="#ddd"
      >
        <PostHeader src={props.profileImage} username={props.username} />

        {/* post image */}
        <PostImage src={props.postImage} />

        {/* post actions */}
        <PostActions likeHandler={likeToggleHandler} isLiked={isLiked} />
        <hr />

        {/* post body */}
        <PostBody
          like={props.like}
          isFollow={props.isFollow}
          username={props.username}
          description={props.description}
          comment={props.comment}
        />
        {/* end post body */}
      </Box>
    </Center>
  );
};

export default PostCardHome;
