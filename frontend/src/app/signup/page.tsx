"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import registerUser from "@/libs/user/registerUser";
import userLogin from "@/libs/user/userLogin";
import { useRouter } from "next/navigation";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [telError, setTelError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const telValue = event.target.value;
    setTel(telValue);

    const telRegex = /^\d{10}$/;
    if (!telRegex.test(telValue)) {
      setTelError("Please enter a valid 10-digit telephone number");
    } else {
      setTelError(null);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

    // Password validation (minimum 8 characters)
    if (passwordValue.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!name || !tel || !email || !password) {
        setError("All fields are required");
        return;
      }

      if (telError || emailError || passwordError) {
        setError("Please fix the validation errors");
        return;
      }

      await registerUser({
        name,
        email,
        tel,
        password,
      });

      await userLogin(email, password);

      router.push("/api/auth/signin");
    } catch (error) {
      console.error("Failed to register");
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Sign up
        </Heading>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={{ base: "90%", md: "400px" }}
        >
          <Stack spacing={4}>
            {error && (
              <Text color="red.500" fontSize="sm">
                {error}
              </Text>
            )}
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" onChange={handleNameChange} />
            </FormControl>
            <FormControl id="tel" isRequired>
              <FormLabel>Tel.</FormLabel>
              <Input type="tel" onChange={handleTelChange} />
              {telError && (
                <Text color="red.500" fontSize="sm">
                  {telError}
                </Text>
              )}
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={handleEmailChange} />
              {emailError && (
                <Text color="red.500" fontSize="sm">
                  {emailError}
                </Text>
              )}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {passwordError && (
                <Text color="red.500" fontSize="sm">
                  {passwordError}
                </Text>
              )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} href="/api/auth/signin">
                  Sign in
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
