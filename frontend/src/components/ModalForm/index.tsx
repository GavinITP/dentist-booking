"use client";

import createDentist from "@/libs/dentist/createDentist";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

export default function ModalForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [name, setName] = useState("");
  const [hospital, setHospital] = useState("");
  const [address, setAddress] = useState("");
  const [expertist, setExpertist] = useState("");
  const [tel, setTel] = useState("");
  const [picture, setPicture] = useState("");

  const { data: session } = useSession();

  return (
    <>
      <Button onClick={onOpen} mt={12}>
        Create Dentists Profile
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create dentist profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} display="flex" flexDirection="column" gap={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Hospital</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Hospital"
                onChange={(e) => setHospital(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Expertise</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Expertise"
                onChange={(e) => setExpertist(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Tel.</FormLabel>
              <Input
                ref={initialRef}
                placeholder="0xxxxxxxxx"
                onChange={(e) => setTel(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                ref={initialRef}
                placeholder="https://..."
                onChange={(e) => setPicture(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={async () => {
                await createDentist(session?.user.token, {
                  name,
                  hospital,
                  address,
                  expertist,
                  tel,
                  picture,
                });
              }}
            >
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
