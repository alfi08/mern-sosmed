import React from "react";
import { Box } from "@chakra-ui/react";

import ContactList from "./ContactList";

const ContactLists = (props) => {
  return (
    <Box overflow="auto" maxH={props.maxH || "400px"} mb={props.mb}  >
      {props.chats.map((msg, i) => (
        <ContactList
          key={i}
          {...msg}
          bt={i !== 0 && "1px"}
          isActive={props.selectedMsg === i}
          index={i}
          onClick={props.onClick}
        />
      ))}
    </Box>
  );
};

export default ContactLists;
