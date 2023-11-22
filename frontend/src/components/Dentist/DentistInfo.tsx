"use client";

import createBooking from "@/libs/booking/createBooking";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DentistInfo = ({ params, dentistData }: any) => {
  const { data: session } = useSession();

  const [date, setDate] = useState("");
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBookingClick = async () => {
    if (!session) onOpen();
    await createBooking(session?.user.token, params.id, {
      bookingDate: date,
    });

    router.push("/mybooking");
  };

  return (
    <Container maxW="container.lg" mt={16}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"extrabold"}
        mb={8}
      >
        {dentistData.name}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={20}>
        <Image
          src={dentistData.picture}
          alt="dentist"
          h={{ base: "100%", md: "360px" }}
          w={{ base: "100%", md: "500px" }}
          objectFit="cover"
          borderRadius="xl"
          mb={{ base: 8, md: 0 }}
          shadow="xl"
        />

        <Flex flexDirection="column" gap={8}>
          <SimpleGrid columns={2} my={{ base: 4, md: 0 }}>
            <Box>
              <Heading fontSize="xl">Hospital</Heading>
              <Text>{dentistData.hospital}</Text>
            </Box>

            <Box>
              <Heading fontSize="xl">Expertise</Heading>
              <Text>{dentistData.expertist}</Text>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={2} my={{ base: 4, md: 0 }}>
            <Box>
              <Heading fontSize="xl">Address</Heading>
              <Text>{dentistData.address}</Text>
            </Box>

            <Box>
              <Heading fontSize="xl">Tel.</Heading>
              <Text>{dentistData.tel}</Text>
            </Box>
          </SimpleGrid>

          <Divider />

          <Flex flexDirection="column" gap={4}>
            <Text fontSize="md" fontWeight={700}>
              Select your booking date
            </Text>
            <Input
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
            />
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={handleBookingClick}
            >
              Book
            </Button>
          </Flex>
        </Flex>
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please Sign in</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Link href="/api/auth/signin">
              <Button colorScheme="blue">Sign in</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default DentistInfo;
