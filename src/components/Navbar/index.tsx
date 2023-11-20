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

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      borderStyle={"solid"}
      borderBottom={1}
      borderColor={useColorModeValue("gray.200", "gray.900")}
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
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              fontWeight={900}
              fontSize="xl"
            >
              Logo
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {/* <IconButton
              isRound={true}
              variant="solid"
              aria-label="toggle light mode"
              onClick={toggleColorMode}
              icon={<Icon as={MdLightMode} />}
            /> */}

            <IconButton
              isRound={true}
              variant="solid"
              aria-label="toggle dark mode"
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

            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              colorScheme="blue"
              href={"#"}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
