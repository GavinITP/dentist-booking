import getDentist from "@/libs/dentist/getDentist";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Dentist = async ({ params }: { params: { id: string } }) => {
  const dentistJson = await getDentist(params.id);
  const dentistData = dentistJson.data;

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
            <Input type="date" />
            <Button colorScheme="blue" variant="outline">
              Book
            </Button>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Dentist;
