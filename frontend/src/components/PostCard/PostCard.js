import React, { useState, useEffect, useRef } from "react";
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
  const [saved, setSaved] = useState(false)
  const cursorCommentRef = useRef();

  const likeToggleHandler = () => {
    setIsLiked(!isLiked);
  };

  const saveHandler = () =>{
    setSaved(!saved);
  }

  const cursorToCommentHandler = () => {
    cursorCommentRef.current.focus();
  }

  useEffect(() => {
    setIsLiked(props.isLiked);
  }, [props.isLiked]);

  return (
    <Center>
      <Box
        boxShadow="sm"
        w={{ md: "650px", sm: "85%" }}
        my={props.my || "5"}
        border="1px"
        borderColor="#ddd"
        display={props.display}
      >
        <PostHeader src={props.profileImage} username={props.username} />

        {/* post image */}
        <Box h="500px">
          <PostImage src={props.postImage} likeHandler={likeToggleHandler} />
        </Box>

        {/* post actions */}
        <PostActions
          likeHandler={likeToggleHandler}
          cursorToCommentHandler={cursorToCommentHandler}
          isLiked={isLiked}
          like={props.like}
          saveHandler={saveHandler}
          saved={saved}
        />

        <Box px="10px">
          {/* post body */}
          <PostBody
            isFollow={props.isFollow}
            username={props.username}
            description={props.description}
            comments={props.comment}
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
        <AddComment cursorCommentRef={cursorCommentRef} />
        {/* end post comment */}
      </Box>
    </Center>
  );
};

export default PostCardHome;
