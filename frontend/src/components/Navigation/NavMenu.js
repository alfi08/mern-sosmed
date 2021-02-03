import React from "react";
import { Box, Menu, Icon, MenuList } from "@chakra-ui/react";

import MenuButton from "./MenuButton";

const NavMenu = (props) => {
  return (
    <Box mr={props.mr || "15px"}>
      <Menu placement="top">
        <MenuButton>
          {props.icon ? <Icon as={props.icon} fontSize="25px" /> : props.btn}
        </MenuButton>
        <MenuList bg="#0E2431" borderColor="#533E2D" width="350px">
          {props.children}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavMenu;
