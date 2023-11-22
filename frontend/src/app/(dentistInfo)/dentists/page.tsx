import DentistCard from "@/components/DentistCard";
import { Box, Button, Heading, Modal, SimpleGrid } from "@chakra-ui/react";
import getDentists from "@/libs/dentist/getDentists";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PopoverForm from "@/components/ModalForm";
import ModalForm from "@/components/ModalForm";
import createDentist, { DentistProps } from "@/libs/dentist/createDentist";
import { useState } from "react";

export default async function Dentists() {
  const dentistsJson = await getDentists();
  const dentistsData = dentistsJson.data;

  const session = await getServerSession(authOptions);

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
        ))}
      </SimpleGrid>
    </Box>
  );
}
