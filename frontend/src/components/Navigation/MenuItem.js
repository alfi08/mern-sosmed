import React from "react";
import { MenuItem } from "@chakra-ui/react";
const MenuItemComp = (props) => {
  return (
    <MenuItem
      _hover={{ bg: "transparent", color: "#F2BE8D" }}
      _focus={{ bg: "transparent", color: "#F2BE8D" }}
      onClick={props.onClick}
    >
      {props.children}
    </MenuItem>
  );
};

export default MenuItemComp;
