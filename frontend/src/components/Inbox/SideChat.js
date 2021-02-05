import React from "react";
import { Box } from "@chakra-ui/react";

import ContactLists from "./ContactLists";
import SideHeader from "./SideHeader";

const SideChat = (props) => {
  return (
    <Box>
      <SideHeader />
      <ContactLists
        onClick={props.onClick}
        chats={props.chats}
        selectedMsg={props.selectedMsg}
      />
    </Box>
  );
};

export default SideChat;
