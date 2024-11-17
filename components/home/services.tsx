import { marginX } from "@/utils/constants";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";


const Services = () => {
  return (
    <Stack
      id="services"
      align="center"
      mt="2rem"
      mb="4rem"
      mx={marginX}
      gap="1rem"
    >
      <Heading>My Services</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {servicesData.map((service, i) => (
          <Stack
            key={i}
            align="center"
            textAlign="center"
            gap={4}
            bg="brand.black"
            color="brand.white"
            p="2.5rem"
            borderRadius="md"
            boxShadow="md"
            _hover={{
              bg: "gray.600",
            }}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={70}
              height={70}
            />
            <Heading color="primary" fontSize="2xl">
              {service.title}
            </Heading>
            <Text fontSize="lg">{service.description}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Services;

const servicesData = [
  {
    title: "UI/UX Design",
    description:
      "I design beautiful user interfaces for your web and mobile applications",
    icon: "/ui-ux.webp",
  },
  {
    title: "Web Development",
    description:
      "I create custom build server side web applications using next.js, ASP.Net core among other frameworks",
    icon: "/development.webp",
  },
  {
    title: "Mobile Development",
    description:
      "I build feature rich mobile applications for you using Next.js and React Native or .net MAUI framework",
    icon: "/illustration.webp",
  },
  {
    title: "Machine Learning",
    description:
      "I build intelligent systems that learn from data and make predictions or decisions, using modern machine learning algorithms and tools.",
    icon: "/branding.svg",
  },
  {
    title: "API Development and Integration",
    description:
      "I build flexible and efficient API's that can integrate with third parties, fetch data and push notifications",
    icon: "/consultation.svg",
  },
  {
    title: "Security and Privacy",
    description:
      "I integrate industry-standard security protocols like OAuth and JWT for secure user authentication and authorization",
    icon: "/photography.svg",
  },
];
