import React from "react";
import { Box, Center, Button, Heading } from "@chakra-ui/react";
import Input from "../components/UI/Input";

const Login = () => {
  return (
    <Center>
      <Box
        mt="100px"
        p="20px 35px"
        boxShadow="xl"
        border="1px"
        borderColor="#8e8e8e"
        w="450px"
      >
        <Heading as="h4" textAlign="center" mb="20px">
          Login
        </Heading>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button bg="blue.200" w="100%" size="sm" mt="15px">
          Login
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
