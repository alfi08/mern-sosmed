import React, { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostBody from "./PostBody";
import PostCardModal from "./PostCardModal";
import Comments from "./Comments";
import AddComment from "./AddComment";

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
        <Box h="500px">
          <PostImage src={props.postImage} />
        </Box>

        {/* post actions */}
        <PostActions
          likeHandler={likeToggleHandler}
          isLiked={isLiked}
          like={props.like}
        />

        <Box px="10px">
          {/* post body */}
          <PostBody
            isFollow={props.isFollow}
            username={props.username}
            description={props.description}
            comment={props.comment}
          />
          {/* end post body */}

          {/*  commment list */}
          <PostCardModal
            title="Comments"
            text={`view all ${props.comment.length} comments`}
            padding="15px"
          >
            <Comments comments={props.comment} />
          </PostCardModal>
          {/* end  commment list */}
          <hr />
        </Box>
        {/* post comment */}
        <AddComment />
        {/* end post comment */}
      </Box>
    </Center>
  );
};

export default PostCardHome;
