import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Stack, HStack, VStack, StackDivider, Box } from "@chakra-ui/react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);
  const [cshow, setCshow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleClickc = () => setCshow(!cshow);
  const postDetails = (pics) => {};
  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name">
        <FormLabel>Name:</FormLabel>
        <Input
          placeholder="Enter the Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>

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
              setPassword(e.target.value);
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

      <FormControl>
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter the Password"
            type={cshow ? "text" : "password"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <InputRightElement>
            <Button
              h={"1.7rem"}
              size={"sm"}
              bg={"white"}
              marginRight={"1px"}
              onClick={handleClickc}
            >
              {cshow ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Uplaod your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="teal"
        width={"100%"}
        marginTop={"10px"}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
