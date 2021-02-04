import React from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Heading,
  Box,
  Container,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { BsHeart, BsEnvelope, BsSearch } from "react-icons/bs";

import MenuItem from "./MenuItem";
import PicProfil from "../UI/PicProfile";
import NavMenu from "./NavMenu";
import NotificationItems from "./NotificationItems";

const BottomNavigation = () => {
  return (
    <Box
      bg="#393e46"
      color="#FAF4D0"
      py="4"
      borderTop="1px"
      borderColor="gray.200"
      w="100%"
      position="fixed"
      bottom="0"
      overflow="hidden"
      zIndex="9999"
      display={{ base: "none", md: "none" }}
    >
      <Flex></Flex>
    </Box>
  );
};

export default BottomNavigation;
