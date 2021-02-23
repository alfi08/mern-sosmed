import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerAction } from "../redux/actions/authAction";
import { Box, Center, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/UI/Input";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required().min(4).max(12),
  email: yup.string().required().email(),
  fullname: yup.string().required().min(3),
  password: yup.string().min(6),
});

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.errMessage, auth.token]);

  const submitHandler = (data) => {
    // e.preventDefault();
    console.log(data);
    const { username, email, fullname, password } = registerData;
    dispatch(registerAction(username, email, fullname, password));
  };

  const onChageData = (e) => {
    const { name, value } = e.target;
    setRegisterData((old) => ({ ...old, [name]: value }));
  };

  console.log(auth);
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
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            type="text"
            errmsg={errors?.username?.message}
            name="username"
            placeholder="username"
            ref={register}
            onChange={(e) => onChageData(e)}
          />

          <Input
            type="text"
            errmsg={errors?.email?.message}
            name="email"
            placeholder="Email"
            ref={register}
            onChange={(e) => onChageData(e)}
          />

          <Input
            type="text"
            errmsg={errors?.fullname?.message}
            name="fullname"
            placeholder="Full Name"
            ref={register}
            onChange={(e) => onChageData(e)}
          />

          <Input
            type="password"
            errmsg={errors?.password?.message}
            name="password"
            placeholder="password"
            ref={register}
            onChange={(e) => onChageData(e)}
          />

          <Button
            type="submit"
            bg={errors == undefined ? "blue.200" : "blue.500"}
            w="100%"
            size="sm"
            mt="15px"
            disabled={Object.keys(errors).length}
          >
            Register
          </Button>
        </form>

        <Box textAlign="center" mt="15px">
          Hhave an Account?
          <Box color="blue.500" display="inline">
            <Link to="/login">Login</Link>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Register;
