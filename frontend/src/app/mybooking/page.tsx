import { Box, Heading } from "@chakra-ui/react";

const MyBooking = () => {
  return (
    <Box textAlign={"center"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"extrabold"}
        my={16}
      >
        My Booking
      </Heading>
    </Box>
  );
};

export default MyBooking;
