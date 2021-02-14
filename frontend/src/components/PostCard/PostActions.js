import React from "react";
import { Flex, Icon, Box } from "@chakra-ui/react";
import { MdBookmarkBorder,  MdBookmark } from "react-icons/md";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

import UserThumbItem from "../UI/UserThumbItem";
import PostCardModal from "./PostCardModal";
import ActionButton from "./ActionPostButton";

const PostActions = (props) => {

  return (
    <>
      <Flex justifyContent="space-between">
        <Flex>
          {/* like button */}
          <ActionButton onClick={props.likeHandler}>
            <Icon
              as={props.isLiked ? BsFillHeartFill : BsHeart}
              color={props.isLiked && "#f00"}
            />
          </ActionButton>
          {/* comment button */}
          <ActionButton mx="1" onClick={props.cursorToCommentHandler}>
            {/* <ChatIcon /> */}
            <Icon as={FaRegComment} />
            {/* send button */}
          </ActionButton>
          <ActionButton>
            <Icon as={FiSend} />
          </ActionButton>
        </Flex>
        {/* saved button */}
        <ActionButton onClick={props.saveHandler}>
          <Icon as={props.saved ? MdBookmark :MdBookmarkBorder} />
        </ActionButton>
      </Flex>

      {/* list of user who love this post  */}
      <Box px="10px">
        <PostCardModal title="Likes" text={`${props.like.length} likes`}>
          {props.like.map((like) => (
            <UserThumbItem
              key={like.username}
              username={like.username}
              profileImage={like.profileImage}
              isFollow={props.isFollow}
            />
          ))}
        </PostCardModal>
      </Box>
    </>
  );
};

export default PostActions;
