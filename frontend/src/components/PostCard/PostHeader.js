import React from "react";
import {Link} from "react-router-dom";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

import PicProfile from "../UI/PicProfile";
import ActionButton from "./ActionPostButton";
import PostCardModal from "./PostCardModal";

const PostHeader = (props) => {
  return (
    <Flex p="10px" alignItems="center" justifyContent="space-between">
      <Flex>
        <PicProfile src={props.profileImage} />
        <Box
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          pl="13px"
          d="flex"
          alignItems="center"
        >
          <Link to="profile">
            {props.username}
          </Link>
        </Box>
      </Flex>
      <PostCardModal
        text={
          <ActionButton>
            <Icon as={BsThreeDots} />
          </ActionButton>
        }
        padding="1px"
      >
        {["Report", "Unfollow", "Copy Link"].map((text) => (
          <Box
            key={text}
            textAlign="center"
            borderBottom="1px"
            color="gray.600"
            borderColor="gray.300"
            fontWeight="500"
            py="10px"
            cursor="pointer"
          >
            {text}
          </Box>
        ))}
      </PostCardModal>
    </Flex>
  );
};

export default PostHeader;
