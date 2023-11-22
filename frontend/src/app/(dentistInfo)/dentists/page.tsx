import DentistCard from "@/components/Dentist/DentistCard";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import getDentists from "@/libs/dentist/getDentists";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ModalForm from "@/components/ModalForm";

export default async function Dentists() {
  const dentistsJson = await getDentists();
  const dentistsData = dentistsJson.data;

  const session = await getServerSession(authOptions);

  if (dentistsData.length === 0 || !dentistsData) {
    return (
      <Box textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"extrabold"}
          mt={16}
        >
          Discover Top Dentists Near You
        </Heading>

        <Text mt={12}>No Dentist Available</Text>
      </Box>
    );
  }

  return (
    <Box textAlign={"center"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"extrabold"}
        mt={16}
      >
        Discover Top Dentists Near You
      </Heading>

      {session?.user.name === "staff" || session?.user.role === "admin" ? (
        <ModalForm />
      ) : null}

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
        ))}{" "}
      </SimpleGrid>
    </Box>
  );
}
