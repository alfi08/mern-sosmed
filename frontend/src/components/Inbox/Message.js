import React from "react";

import MessageBody from "./MessageBody";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";

const Message = (props) => {
  return (
    <>
      <MessageHeader username={props.chat.username} selectMsgHandler={props.selectMsgHandler} />
      <MessageBody messages={props.chat.message} />
      <MessageInput />
    </>
  );
};

export default Message;
