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
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Link mr="15px" fontWeight="bold">
          {props.username || "alfi08"}
        </Link>
        {props.body}
      </Box>
      <Box>
        <ActionButton onClick={likeHandler} height="10px"> 
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
