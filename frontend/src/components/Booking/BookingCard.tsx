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
} from "@chakra-ui/react";

const BookingCard = ({
  user,
  dName,
  dAddress,
  dTel,
  bookingDate,
  isAdmin,
}: any) => {
  return (
    <Card textAlign={"center"} maxW={"500px"} mx="auto">
      <CardHeader></CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {isAdmin ? (
            <Box>
              <Heading size="xs" textTransform="uppercase">
                User Name:
              </Heading>
              <Text pt="2" fontSize="sm">
                {user}
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
              {bookingDate}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing="6" mx="auto">
          <Button colorScheme="blue" variant="outline">
            Edit
          </Button>
          <Button colorScheme="red">Delete</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default BookingCard;
