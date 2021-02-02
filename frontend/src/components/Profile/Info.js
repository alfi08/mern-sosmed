import React from "react";
import { Flex, Box, Heading, Icon, Link } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

import ProfileButton from "./ProfileButton";
import FollowModal from "./FollowModal";
import UserThumbItem from "../UI/UserThumbItem";

const Info = () => {
  return (
    <>
      {/* info header */}
      <Flex alignItems="center">
        <Heading mr="15px">Alfi08</Heading>
        {/* action header */}
        <ProfileButton bg="blue.400" color="#fff">
          Follow
        </ProfileButton>
        <ProfileButton>
          <Icon as={BsThreeDots} />
        </ProfileButton>
      </Flex>

      {/* info follow */}
      <Flex my="20px">
        <Box mr="30px">
          <span style={{ fontWeight: "bold" }}>21</span>post
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
      <Box>
        {/* name */}
        <Box fontSize="23px" fontWeight="bold">
          ALfi Sahri
        </Box>

        {/* description */}
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere non
          oui ex, dolorum et? Nulla, explicabo.
        </Box>

        {/* website */}
        <Link href="dev.to" fontWeight="bold" fontSize="17px" color="blue.600">
          dev.to
        </Link>
      </Box>
    </>
  );
};

export default Info;
