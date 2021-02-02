import React from "react";
import { Box } from "@chakra-ui/react";

const ChoiceBtn = (props) => {
  return (
    <Box
      mx="25px"
      color={props.choice === props.value ? "#333" : "#8e8e8e"}
      fontWeight="600"
      fontSize="13px"
      cursor="pointer"
      borderTop={props.choice === props.value ? "1px" : "0"}
      borderColor="#8e8e8e"
      py="10px"
      mt="-2px"
      onClick={() => props.onClick(props.value)}
    >
      {props.children}
    </Box>
  );
};

export default ChoiceBtn;
