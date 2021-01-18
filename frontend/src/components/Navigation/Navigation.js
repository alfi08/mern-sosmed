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
import React from "react";
import { BsHeart, BsEnvelope, BsSearch } from "react-icons/bs";

import MenuItem from "./MenuItem";
import PicProfil from "../UI/PicProfile";
import NavMenu from "./NavMenu";

const Navigation = () => {
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
          <Heading as="h1" fontWeight="400" cursor="pointer">
            StalkMe
          </Heading>

          {/* search input */}
          <Box px="30px">
            <InputGroup>
              <Input
                placeholder="Cari.."
                height="35px"
                borderColor="#171717"
                _focus={{ borderColor: "#171717" }}
                _hover={{ borderColor: "#171717" }}
              />
              <InputRightElement
                children={<BsSearch color="#171717" fontSize="15px" />}
              />
            </InputGroup>
          </Box>

          <Flex justifyContent="center">
            {/* Notification menu */}
            <NavMenu icon={BsHeart}>
              <MenuItem>Nanti di sayang sama dia!</MenuItem>
              <MenuItem>Nanti di sayang sama dia!</MenuItem>
              <MenuItem>Nanti di sayang sama dia!</MenuItem>
            </NavMenu>
            {/* end Notification menu */}

            {/* Inbox menu */}
            <Box mr="15px" height="2.5rem" lineHeight="2.5rem" cursor="pointer">
              <Icon as={BsEnvelope} fontSize="25px" />
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
              <MenuItem>Profile</MenuItem>
              <MenuItem>New Post</MenuItem>
              <MenuItem>Logout</MenuItem>
            </NavMenu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
