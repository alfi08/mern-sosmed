import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { Flex, Heading, Box, Container, Icon } from "@chakra-ui/react";
import {logoutAction} from "../../redux/actions/authAction"
import { BsHeart, BsEnvelope } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";

import MenuItem from "./MenuItem";
import PicProfil from "../UI/PicProfile";
import NavMenu from "./NavMenu";
import NotificationItems from "../Notification/NotificationItems";
import InputSearch from "../UI/InputSearch";

const Navigation = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = async () => {
    dispatch(logoutAction());
    history.push("/login");
  }

  return (
    <Box
      bg="#393e46"
      color="#FAF4D0"
      py="4"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Container maxW="90%">
        <Flex alignItems="center" justifyContent="space-between">
          {/* logo */}
          <Box display={{ base: "block", md: "none" }}>
            <NavLink to="/new-story">
              <Icon as={AiOutlineCamera} fontSize="30px" />
            </NavLink>
          </Box>

          <NavLink to="/">
            <Heading as="h1" fontWeight="400" cursor="pointer">
              StalkMe
            </Heading>
          </NavLink>

          {auth.token ? (
          <>
            <Box display={{ base: "block", md: "none" }}>
              <NavLink to="/inbox">
                <Icon as={BsEnvelope} fontSize="30px" />
              </NavLink>
            </Box>

            {/* search input */}
            <InputSearch display={{ base: "none", md: "block" }} />

            {/* right menu */}
            <Flex justifyContent="center" display={{ base: "none", md: "flex" }}>
              {/* Notification menu */}
              <NavMenu icon={BsHeart}>
                <Box h="350px" overflow="auto">
                  <NotificationItems />
                </Box>
              </NavMenu>
              {/* end Notification menu */}

              {/* Inbox menu */}
              <Box mr="15px" height="2.5rem" lineHeight="2.5rem" cursor="pointer">
                <NavLink to="/inbox">
                  <Icon as={BsEnvelope} fontSize="25px" />
                </NavLink>
              </Box>
              {/* end Inbox menu */}

              {/* profile menu*/}
              <NavMenu
                btn={
                  <PicProfil
                    src="https://picsum.photos/id/646/367/267"
                    size="30px"
                    marginTop="7px"
                  />
                }
              >
                <NavLink to="/profile">
                  <MenuItem>Profile</MenuItem>
                </NavLink>
                <NavLink to="/newpost">
                  <MenuItem>New Post</MenuItem>
                </NavLink>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </NavMenu>
            </Flex>
            {/* end right menu */}
          </>)
           : (
            <NavLink to="/login">
              Login
            </NavLink>
          )}

        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
