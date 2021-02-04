import React from "react";
import { Box, InputGroup, Input, InputRightElement } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

const InputSearch = (props) => {
  return (
    <Box px={props.px || "30px"} display={props.display}>
      <InputGroup>
        <Input
          placeholder="Cari.."
          height="35px"
          borderColor="#171717"
          _focus={{ borderColor: "#171717" }}
          _hover={{ borderColor: "#171717" }}
          w="300px"
        />
        <InputRightElement
          children={<BsSearch color="#171717" fontSize="15px" />}
        />
      </InputGroup>
    </Box>
  );
};

export default InputSearch;
