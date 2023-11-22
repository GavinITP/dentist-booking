"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import BookingCard from "./BookingCard";

const MyBooking = ({ bookingsData, isAdmin }: any) => {
  if (
    !bookingsData ||
    !Array.isArray(bookingsData) ||
    bookingsData.length === 0
  ) {
    return (
      <Box textAlign="center">
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"extrabold"}
          my={16}
        >
          Booking List
        </Heading>

        <Text>No bookings available.</Text>
      </Box>
    );
  }

  return (
    <Box textAlign="center">
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"extrabold"}
        my={16}
      >
        Booking List
      </Heading>

      {bookingsData.map((data: any) => {
        const { _id, bookingDate, user, dentist } = data;

        const { name: dName, address: dAddress, tel: dTel } = dentist;

        return (
          <Box key={_id} my={8}>
            <BookingCard
              user={user}
              dName={dName}
              dAddress={dAddress}
              dTel={dTel}
              bookingDate={bookingDate}
              isAdmin={isAdmin}
              bookingId={_id}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default MyBooking;
