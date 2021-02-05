import React, { useState, useCallback } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import SideChat from "./SideChat";
import Message from "./Message";

import { CHAT_DUMMY as chats } from "../../DB";

const InboxDesktopView = () => {
  const [selectedMsg, setSelectedMsg] = useState(0);

  const selectMsgHandler = useCallback(
    (select) => {
      setSelectedMsg(select);
    },
    [setSelectedMsg]
  );

  return (
    <Container maxW="80%" mt="20px">
      <Flex
        border="1px"
        borderColor="#8e8e8e"
        justifyContent="space-between"
        w="100%"
        borderRadius="5px"
      >
        {/* side chat */}
        <Box
          w="30%"
          borderRight="1px"
          borderColor="#8e8e8e"
          maxH="450px"
          overflow="hidden"
        >
          <SideChat
            onClick={selectMsgHandler}
            chats={chats}
            selectedMsg={selectedMsg}
          />
        </Box>

        {/* message */}
        <Box w="70%">
          <Message chat={chats[selectedMsg]} />
        </Box>
      </Flex>
    </Container>
  );
};

export default InboxDesktopView;
