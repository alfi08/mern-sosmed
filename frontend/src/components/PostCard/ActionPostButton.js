import React from "react";
import { Button } from "@chakra-ui/react";
const ActionPostButton = (props) => {
  return (
    <Button
      bg="transparent"
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      _focus={{ bg: "transparent" }}
      fontSize="23px"
      onClick={props.onClick}
      px="1px"
      height={props.height}
    >
      {props.children}
    </Button>
  );
};

export default ActionPostButton;
