import DentistCard from "@/components/DentistCard";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import getDentists from "@/app/libs/getDentists";
import { Suspense } from "react";

export default async function Dentists() {
  const dentistsJson = await getDentists();
  const dentistsData = dentistsJson.data;

  return (
    <Box textAlign={"center"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"extrabold"}
        mt={16}
      >
        Discover Top Dentists Near You
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        maxW={{ base: "2xl", md: "75%" }}
        mx="auto"
        my={12}
      >
        {dentistsData.map(({ id, name, hospital, expertist, picture }: any) => (
          <DentistCard
            key={id}
            id={id}
            name={name}
            hospital={hospital}
            expertist={expertist}
            picture={picture}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
