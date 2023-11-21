"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "@chakra-ui/next-js";

import { useSession } from "next-auth/react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const { data: session } = useSession();

  return (
    <Box
      borderStyle={"solid"}
      borderBottom={1}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      mb={0}
    >
      <Container maxW="container.xl">
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            alignItems="center"
            justify={{ base: "center", md: "start" }}
          >
            <Link href={"/"} _hover={{ textDecoration: "none" }}>
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
                fontWeight={900}
                fontSize="xl"
              >
                DentBook
              </Text>
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={{ base: 0, sm: 6 }}
          >
            <IconButton
              isRound={true}
              variant="solid"
              aria-label="toggle dark mode"
              display={{ base: "none", md: "inline-flex" }}
              onClick={toggleColorMode}
              bg="transparent"
              icon={
                colorMode === "light" ? (
                  <Icon as={MdNightlightRound} boxSize={5} />
                ) : (
                  <Icon as={MdLightMode} boxSize={5} />
                )
              }
            />

            {session ? (
              <>
                <Flex alignItems="center" gap={8}>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    noOfLines={1}
                    whiteSpace="nowrap"
                  >
                    Welcome, {session.user?.name}
                  </Text>
                  <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                    href={"/api/auth/signout"}
                  >
                    Sign Out
                  </Button>
                </Flex>
              </>
            ) : (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/api/auth/signin"}
                >
                  Sign In
                </Button>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  colorScheme="blue"
                  href={"/api/auth/signup"}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
