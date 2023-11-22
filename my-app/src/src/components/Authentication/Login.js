import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Stack, HStack, VStack, StackDivider, Box } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const submitHandler = () => {};
  return (
    <VStack spacing={"5px"}>
      <FormControl id="email">
        <FormLabel>Email:</FormLabel>
        <Input
          placeholder="Enter the Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter the Password"
            type={show ? "text" : "password"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputRightElement>
            <Button
              h={"1.7rem"}
              size={"sm"}
              bg={"white"}
              marginRight={"1px"}
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="teal"
        width={"100%"}
        marginTop={"10px"}
        onClick={submitHandler}
      >
        LogIn
      </Button>

      <Button
        colorScheme="red"
        width={"100%"}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
