import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import PicProfile from "../UI/PicProfile";

const NotifItem = (props) => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb="15px"
        p="10px"
        borderTop={props.border}
        borderColor="#ddd"
      >
        {/* notif info */}
        <Flex>
          {/* profile image */}
          <PicProfile src={props.from.profileImage} marginTop="10px" />

          {/* username and message notification */}
          <Box ml="10px">
            <Box>{props.from.username}</Box>
            <Box>started following you</Box>
          </Box>
        </Flex>

        {/* notif body */}
        <Box p="5px 10px" bg="blue.500" borderRadius="10px" mt="10px">
          Follow
        </Box>
      </Flex>
    </>
  );
};

export default NotifItem;
