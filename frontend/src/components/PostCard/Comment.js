import React, { useState } from "react";
import { Box, Link, Flex, Icon } from "@chakra-ui/react";

import { BsFillHeartFill, BsHeart } from "react-icons/bs";

import ActionButton from "./ActionPostButton";

const Comment = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Flex mb="10px" justifyContent="space-between">
      <Box>
        <Link mr="15px" fontWeight="bold">
          {props.username || "alfi08"}
        </Link>
        {props.body}
      </Box>
      <Box>
        <ActionButton onClick={likeHandler}>
          <Icon
            as={isLiked ? BsFillHeartFill : BsHeart}
            color={isLiked && "#f00"}
            w="10px"
          />
        </ActionButton>
      </Box>
    </Flex>
  );
};

export default Comment;
