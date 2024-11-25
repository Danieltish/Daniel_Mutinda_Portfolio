"use client";
import {
  Box,
  Image,
  Stack,
  SimpleGrid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { marginX } from "@/utils/constants";

const About = () => {
  return (
    <Stack
      id="about"
      align="center"
      mt="4rem"
      mb="4rem"
      mx={marginX}
      gap="2rem"
    >
      {/* Section Title */}
      <Heading
        textAlign="center"
        color="#EB7D24"
        fontSize={{ base: "3xl", md: "4xl" }}
        mb="1rem"
      >
        About Me
      </Heading>

      {/* About Me Content */}
      <Box
        textAlign="center"
        bg="black"
        color="white"
        p={{ base: "2rem", md: "4rem" }}
        borderRadius="md"
        boxShadow="md"
        maxW="1200px"
        w="full"
      >
        {/* Logo centered */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/logo copy.png" // Ensure the path matches your public folder (e.g., public/logo copy.png)
            alt="Logo"
            boxSize={{ base: "60px", md: "80px" }} // Adjust size as needed
            objectFit="contain"
            mb="1.5rem" // Margin-bottom to separate logo from text
          />
        </Box>

        <VStack spacing={4} align="center" mb="3rem">
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400">
            With over 5 years of experience, I excel in designing visually
            captivating websites, user-friendly mobile applications, and
            advanced intelligent systems that fuel business success. Skilled in
            a diverse array of programming languages and frameworks, I provide
            efficient, results-oriented solutions tailored to your needs. My
            goal is to help your business thrive in the digital era by
            delivering top-tier, bespoke solutions that offer lasting value.
          </Text>
        </VStack>

        {/* Experience Metrics Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Stack align="center" spacing={2}>
            <Text fontWeight="bold" color="#EB7D24" fontSize="xl">
              Years of Experience
            </Text>
            <Text color="gray.400" fontSize="md">
              5 Years
            </Text>
          </Stack>
          <Stack align="center" spacing={2}>
            <Text fontWeight="bold" color="#EB7D24" fontSize="xl">
              Customers Served
            </Text>
            <Text color="gray.400" fontSize="md">
              120+
            </Text>
          </Stack>
          <Stack align="center" spacing={2}>
            <Text fontWeight="bold" color="#EB7D24" fontSize="xl">
              Consultations Offered
            </Text>
            <Text color="gray.400" fontSize="md">
              150+
            </Text>
          </Stack>
          <Stack align="center" spacing={2}>
            <Text fontWeight="bold" color="#EB7D24" fontSize="xl">
              Satisfied Clients
            </Text>
            <Text color="gray.400" fontSize="md">
              110+
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default About;
