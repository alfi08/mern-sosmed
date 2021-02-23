import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Center, Button, Heading } from "@chakra-ui/react";
import { loginAction } from "../redux/actions/authAction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/UI/Input";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required().min(4).max(12),
  password: yup.string().min(6),
});

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (auth.token) {
      history.push("/");
    }
  }, [auth.token]);

  const submithandler = (data) => {
    console.log(data);
    dispatch(loginAction(username, password));
  };

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
        <form onSubmit={handleSubmit(submithandler)}>
          <Input
            placeholder="username"
            ref={register}
            errmsg={errors?.username?.message}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            ref={register}
            name="password"
            errmsg={errors?.password?.message}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            bg={errors == undefined ? "blue.200" : "blue.500"}
            w="100%"
            size="sm"
            mt="15px"
            disabled={
              Object.keys(errors).length || !username.length || !password.length
            }
          >
            Login
          </Button>
        </form>
        <Box textAlign="center" mt="15px">
          Don't have an Account?{" "}
          <Box color="blue.500" display="inline">
            <Link to="/register">Register</Link>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Login;
