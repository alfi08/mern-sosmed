import React from "react";
import { MenuButton as MB, Box } from "@chakra-ui/react";

const MenuButton = (props) => {
  return (
    <MB
      as={Box}
      p="0"
      bg="transparent"
      _hover={{ bg: "transparent", color: "#F2BE8D" }}
      _active={{ bg: "transparent", color: "#F2BE8D" }}
      _focus={{ bg: "transparent" }}
      fontSize={props.fontSize || "20px"}
      fontWeight="700"
      height="2.5rem"
      lineHeight="2.5rem"
      cursor="pointer"
    >
      {props.children}
    </MB>
  );
};

export default MenuButton;
