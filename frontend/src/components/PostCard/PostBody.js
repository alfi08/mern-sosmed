import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

import LikeModalItem from "./LikeModalItem";
import PostCardModal from "./PostCardModal";
import Comments from "./Comments";
import AddComment from "./AddComment";

const PostBody = (props) => {
  return (
    <div>
      <Box p="2">
        <PostCardModal title="Likes" text={`${props.like.length} likes`}>
          {props.like.map((like) => (
            <LikeModalItem
              key={like.username}
              username={like.username}
              profileImage={like.profileImage}
              isFollow={props.isFollow}
            />
          ))}
        </PostCardModal>
        <Text marginBottom="10px">
          {/* username */}
          <Link fontSize="md" fontWeight="semibold" href="#" mr="10px">
            {props.username}
          </Link>
          {/* post description */}
          {props.description}
        </Text>
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
        {/* post comment */}
        <AddComment />
        {/* end post comment */}
      </Box>
    </div>
  );
};

export default PostBody;
