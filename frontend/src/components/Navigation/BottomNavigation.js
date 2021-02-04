import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import { BsHeart, BsPlusSquare, BsSearch, BsHouse } from "react-icons/bs";

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
        <NavLink to="/">
          <MenuBottom icon={BsHouse} />
        </NavLink>

        <NavLink to="/search">
          <MenuBottom icon={BsSearch} />{" "}
        </NavLink>
        <NavLink to="/NewPost">
          <MenuBottom icon={BsPlusSquare} border="1px" />{" "}
        </NavLink>
        <NavLink to="/notification">
          <MenuBottom icon={BsHeart} />{" "}
        </NavLink>
        <NavLink to="/profile">
          <MenuBottom
            btn={
              <PicProfil
                src="https://picsum.photos/id/646/367/267"
                size="35px"
                margin="auto"
              />
            }
          />
        </NavLink>
      </Flex>
    </Box>
  );
};

export default BottomNavigation;
