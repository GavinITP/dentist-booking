import DentistCard from "@/components/DentistCard";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Dentists = () => {
  return (
    <Box textAlign={"center"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"extrabold"}
        my={16}
      >
        Discover Top Dentists Near You
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        maxW={{ base: "2xl", md: "75%" }}
        mx="auto"
      >
        <DentistCard />
        <DentistCard />
        <DentistCard />
        <DentistCard />
        <DentistCard />
        <DentistCard />
      </SimpleGrid>
    </Box>
  );
};

export default Dentists;
