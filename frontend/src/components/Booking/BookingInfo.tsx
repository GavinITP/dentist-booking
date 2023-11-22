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
        My Booking
      </Heading>

      {bookingsData.map((data: any) => {
        const { _id, bookingDate, user, dentist } = data;

        const { name: dName, address: dAddress, tel: dTel } = dentist;

        return (
          <Box key={_id} my={8}>
            <BookingCard
              user={isAdmin ? user.name : user}
              dName={dName}
              dAddress={dAddress}
              dTel={dTel}
              bookingDate={bookingDate}
              isAdmin={isAdmin}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default MyBooking;
