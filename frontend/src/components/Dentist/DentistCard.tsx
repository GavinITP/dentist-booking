"use client";

import deleteDentist from "@/libs/dentist/deleteDentist";
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
  IconButton,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdLocationOn } from "react-icons/md";

import { TiDelete } from "react-icons/ti";

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
  const { data: session } = useSession();
  const router = useRouter();

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
        pt={8}
        overflow={"hidden"}
      >
        <Flex justifyContent="flex-end">
          {session?.user.name === "staff" || session?.user.role === "admin" ? (
            <IconButton
              mt={-8}
              aria-label={"delete"}
              icon={<Icon as={TiDelete} boxSize={8} />}
              color="red.500"
              variant="ghost"
              onClick={async () => {
                await deleteDentist(session?.user.token, id);

                router.refresh();
              }}
            />
          ) : null}
        </Flex>

        <Flex justify={"center"}>
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
