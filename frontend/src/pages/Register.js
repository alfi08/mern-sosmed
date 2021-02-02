import React from "react";
import { Box, Center, Button, Heading } from "@chakra-ui/react";
import Input from "../components/UI/Input";

const Register = () => {
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
          Register
        </Heading>
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Full Name" />
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button bg="blue.200" w="100%" size="sm" mt="15px">
          Register
        </Button>
      </Box>
    </Center>
  );
};

export default Register;
