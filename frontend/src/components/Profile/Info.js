import React from "react";
import { Flex, Box, Heading, Icon } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

import ProfileButton from "./ProfileButton";
import FollowModal from "./FollowModal";
import UserThumbItem from "../UI/UserThumbItem";
import PostCardModal from "../PostCard/PostCardModal";
import InfoBody from "./InfoBody";

const Info = () => {
  return (
    <>
      {/* info header */}
      <Flex alignItems="center">
        {/* username */}
        <Heading
          mr="15px"
          fontSize={{ base: "22px", lg: "35px" }}
          ml={{ base: "20px", sm: "5px" }}
        >
          Alfi08
        </Heading>

        {/* action header */}
        <ProfileButton bg="blue.400" color="#fff">
          Follow
        </ProfileButton>

        <PostCardModal text={<Icon as={BsThreeDots} />} padding="1px">
          {["Report User", "Block this User"].map((text) => (
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

      {/* info follow */}
      <Flex my="20px">
        <Box
          mr={{ base: "15px", lg: "30px" }}
          fontSize={{ base: "20px", lg: "17px" }}
          textAlign="center"
        >
          <span style={{ fontWeight: "bold" }}>21</span> post
        </Box>

        {/* followers */}
        <FollowModal count="11" text="followers">
          <UserThumbItem />
          <UserThumbItem />
          <UserThumbItem />
        </FollowModal>

        {/* following */}
        <FollowModal count="41" text="following">
          <UserThumbItem />
          <UserThumbItem />
          <UserThumbItem />
        </FollowModal>
      </Flex>

      {/* info body */}
      <InfoBody display={{ base: "none", md: "block" }} />
    </>
  );
};

export default Info;
