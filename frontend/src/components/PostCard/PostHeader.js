import React from "react";
import { Box, Link, Flex, Icon, Button } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

import PicProfile from "../UI/PicProfile";
import ActionButton from "./ActionPostButton";
import PostCardModal from "./PostCardModal";

const PostHeader = (props) => {
  return (
    <Flex p="10px" alignItems="center" justifyContent="space-between">
      <Flex>
        <PicProfile src={props.profileImage} />
        <Box pl="13px">
          <Link
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
          >
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
            color
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
