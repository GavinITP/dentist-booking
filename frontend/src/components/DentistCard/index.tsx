"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

interface Props {
  id: string;
  name: string;
  hospital: string;
  expertist: string;
  picture: string;
}

export default function DentistCard({
  id,
  name,
  hospital,
  expertist,
  picture,
}: Props) {
  return (
    <Center
      py={6}
      _hover={{
        transform: "scale(1.01)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Box
        maxW={"270px"}
        w={"full"}
        h="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Flex justify={"center"} mt={12}>
          <Avatar
            name={name}
            size={"xl"}
            src={picture}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
              {name}
            </Heading>
            <Text fontSize={"sm"} color={"gray.500"}>
              {expertist}
            </Text>
            <Flex flexDirection="row" alignItems="center" mt={4} gap={1}>
              <Icon as={MdLocationOn} />
              <Text fontSize={"sm"} color={"gray.500"}>
                {hospital}
              </Text>
            </Flex>
          </Stack>

          <Link href={`/dentists/${id}`}>
            <Button
              w={"full"}
              mt={4}
              colorScheme="blue"
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Choose
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}
