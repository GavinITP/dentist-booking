"use client";

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

import { useRouter } from "next/navigation";
import updateDentist from "@/libs/dentist/updateDentist";

export default function EditDentist({ id }: any) {
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

  const router = useRouter();

  return (
    <>
      <Button onClick={onOpen} mt={2} w="full">
        Edit
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit dentist</ModalHeader>
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
                await updateDentist(session?.user.token, id, {
                  name,
                  hospital,
                  address,
                  expertist,
                  tel,
                  picture,
                });

                router.refresh();
                onClose();
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
