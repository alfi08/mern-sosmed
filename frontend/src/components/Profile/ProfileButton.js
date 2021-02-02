import React from "react";
import { Box, Button } from "@chakra-ui/react";

const ProfileButton = (props) => {
  return (
    <Button
      bg={props.bg || "#fff"}
      color={props.color || "#000"}
      border="1px"
      borderColor="gray.400"
      size="sm"
      mr="10px"
    >
      {props.children}
    </Button>
  );
};

export default ProfileButton;
