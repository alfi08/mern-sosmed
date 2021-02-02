import React from "react";
import { Flex, Link, Button } from "@chakra-ui/react";
import PicProfile from "./PicProfile";

import DefaultPic from "../../assets/img/default.webp";

const UserThumbItem = (props) => {
  return (
    <Flex justifyContent="space-between" my="15px">
      <Flex alignItems="center">
        <PicProfile src={props.profileImage || DefaultPic} size="40px" />
        <Link ml="10px">{props.username || "alfi08"}</Link>
      </Flex>

      <Button bg="#00ADB5" color="#fff" _hover={{ bg: "#00ADB5" }}>
        Follow
      </Button>
    </Flex>
  );
};

export default UserThumbItem;
