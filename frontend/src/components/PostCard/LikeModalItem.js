import React from "react";
import { Flex, Link, Button } from "@chakra-ui/react";
import PicProfile from "../UI/PicProfile";

const LikeModalItem = (props) => {
  return (
    <Flex justifyContent="space-between" my="15px">
      <Flex alignItems="center">
        <PicProfile src="https://picsum.photos/id/1003/367/267" size="40px" />
        <Link ml="10px">{props.username || "alfi08"}</Link>
      </Flex>

      <Button bg="#00ADB5" color="#fff" _hover={{ bg: "#00ADB5" }}>
        Follow
      </Button>
    </Flex>
  );
};

export default LikeModalItem;
