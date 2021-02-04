import React from "react";
import { Icon, Box } from "@chakra-ui/react";

const MenuBottom = (props) => {
  return (
    <Box w="100%" textAlign="center" py={props.py || "2"} cursor="pointer">
      {props.icon ? <Icon as={props.icon} fontSize="25px" /> : props.btn}
    </Box>
  );
};

export default MenuBottom;
