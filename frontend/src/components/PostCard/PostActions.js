import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { MdBookmarkBorder } from "react-icons/md";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

import ActionButton from "./ActionPostButton";

const PostActions = (props) => {
  return (
    <Flex py="1" justifyContent="space-between">
      <Flex>
        {/* like button */}
        <ActionButton onClick={props.likeHandler}>
          <Icon
            as={props.isLiked ? BsFillHeartFill : BsHeart}
            color={props.isLiked && "#f00"}
          />
        </ActionButton>
        {/* comment button */}
        <ActionButton mx="1">
          {/* <ChatIcon /> */}
          <Icon as={FaRegComment} />
          {/* send button */}
        </ActionButton>
        <ActionButton>
          <Icon as={FiSend} />
        </ActionButton>
      </Flex>

      <ActionButton>
        <Icon as={MdBookmarkBorder} />
      </ActionButton>
    </Flex>
  );
};

export default PostActions;
