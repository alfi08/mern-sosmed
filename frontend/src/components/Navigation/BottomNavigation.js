import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import { BsHeart, BsEnvelope, BsSearch, BsHouse } from "react-icons/bs";

import PicProfil from "../UI/PicProfile";
import MenuBottom from "./MenuBottom";

const BottomNavigation = () => {
  return (
    <Box
      bg="#393e46"
      color="#FAF4D0"
      borderTop="1px"
      borderColor="gray.200"
      w="100%"
      position="fixed"
      bottom="0"
      overflow="hidden"
      zIndex="9999"
      display={{ base: "block", md: "none" }}
    >
      <Flex justifyContent="space-around">
        <MenuBottom icon={BsHouse} />
        <MenuBottom icon={BsSearch} />
        <MenuBottom icon={BsHeart} />
        <MenuBottom icon={BsEnvelope} />
        <MenuBottom
          btn={
            <PicProfil
              src="https://picsum.photos/id/646/367/267"
              size="35px"
              margin="auto"
            />
          }
        />
      </Flex>
    </Box>
  );
};

export default BottomNavigation;
