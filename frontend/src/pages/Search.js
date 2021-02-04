import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import InputSearch from "../components/UI/InputSearch";

const Search = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      borderBottom="1px"
      borderColor="#8e8e8e"
      py="5px"
    >
      <InputSearch px="1px" />
      <Box fontSize="17px" color="#8e8e8e" px="10px">
        cancel
      </Box>
    </Flex>
  );
};

export default Search;
