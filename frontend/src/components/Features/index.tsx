"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaSearch, FaCalendar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={5}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Stack align={"start"} spacing={4}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          color={useColorModeValue("blue.500", "blue.50")}
          bg={useColorModeValue("blue.50", "blue.500")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={4} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4} my={12}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Easy Booking for Your Dental Need
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", md: "lg" }}>
          Effortless Dental Appointments – Simplify your scheduling with our
          easy booking platform. Your smile deserves the best care, conveniently
          booked at your fingertips!
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={16} justify="center">
          <Card
            heading={"Choose Your Preferred Dentist"}
            icon={<Icon as={FaSearch} w={10} h={10} />}
            description={
              "Browse through our team of experienced dentists and select the one that best suits your needs."
            }
            href={"#"}
          />
          <Card
            heading={"Pick a Convenient Date and Time"}
            icon={<Icon as={FaCalendar} w={10} h={10} />}
            description={
              "Select a date and time that aligns seamlessly with your schedule and offers the utmost convenience for you."
            }
            href={"#"}
          />
          <Card
            heading={"Enjoy a Comfortable Dental Experience"}
            icon={<Icon as={BiSolidLike} w={10} h={10} />}
            description={
              "Every clinics are designed to provide a welcoming environment, ensuring your visit is stress-free."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
