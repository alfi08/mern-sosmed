import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import { CHAT_DUMMY as chats } from "../../DB";
import ContactLists from "./ContactLists";
import Message from "./Message";

const InboxMobileView = () => {
  const [selectMsg, setSelectMsg] = useState(false);

  const selectMsgHandler = (select) => {
    setSelectMsg(chats[select]);
  };

  return selectMsg ? (
    <Box minH="100vh" position="relative">
      <Message chat={selectMsg} />
    </Box>
  ) : (
    <ContactLists
      onClick={selectMsgHandler}
      chats={chats}
      selectedMsg={selectMsg}
    />
  );
};

export default InboxMobileView;
