import React from "react";
import { Input } from "@chakra-ui/react";

const InputEl = (props) => {
  return (
    <Input {...props} padding="10px" borderRadius="10px" my="5px" size="sm" />
  );
};

export default InputEl;
