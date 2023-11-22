"use client";

import deleteBooking from "@/libs/booking/deleteBooking";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Box,
  Text,
  useColorModeValue,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const BookingCard = ({
  user,
  dName,
  dAddress,
  dTel,
  bookingDate,
  isAdmin,
  bookingId,
}: any) => {
  const { data: session } = useSession();

  const router = useRouter();

  const handleDelete = async () => {
    isAdmin
      ? await deleteBooking(session?.user.token, bookingId)
      : await deleteBooking(session?.user.token, bookingId);

    router.refresh();
  };
  return (
    <Card textAlign={"center"} maxW={"500px"} mx="auto">
      <CardBody>
        <Stack divider={<Divider />} spacing="4">
          {isAdmin ? (
            <Box>
              <Heading size="xs" textTransform="uppercase">
                User Name:
              </Heading>
              <Text pt="2" fontSize="sm">
                {user.name}
              </Text>
            </Box>
          ) : null}

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Dentist Name
            </Heading>
            <Text pt="2" fontSize="sm">
              {dName}
            </Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Address
            </Heading>
            <Text pt="2" fontSize="sm">
              {dAddress}
            </Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Tel.
            </Heading>
            <Text pt="2" fontSize="sm">
              {dTel}
            </Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Booking Date
            </Heading>
            <Text pt="2" fontSize="sm">
              {new Date(bookingDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "numeric",
                second: "numeric",
                hour12: false,
                timeZone: "UTC",
              })}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing="6" mx="auto">
          <Button colorScheme="blue" variant="outline">
            Edit
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default BookingCard;
