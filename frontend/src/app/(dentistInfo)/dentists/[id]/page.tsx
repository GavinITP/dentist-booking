import getDentist from "@/app/libs/getDentist";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Dentist = async ({ params }: { params: { id: string } }) => {
  const dentistJson = await getDentist(params.id);
  const dentistData = dentistJson.data;

  return (
    <Container maxW="container.lg" mt={16}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"extrabold"}
        mb={4}
      >
        {dentistData.name}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={20}>
        <Box>
          <Image
            src={dentistData.picture}
            alt="dentist"
            height="300px"
            width="500px"
            objectFit="cover"
            borderRadius="xl"
          />
        </Box>

        <Box>
          <Text>Hospital: {dentistData.hospital}</Text>
          <Text>Expertise: {dentistData.expertist}</Text>
          <Text>Address: {dentistData.address}</Text>
          <Text>Tel: {dentistData.tel}</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Dentist;
