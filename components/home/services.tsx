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
    title: "Back-end-Web Development",
    description:
      "I create custom build server side web applications using technologies like next.js or ASP.Net core and databases such as MongoDB or SQL",
    icon: "/development.webp",
  },
  {
    title: "Mobile Development",
    description:
      "I build feature rich cross platform mobile applications using Next.js and React Native or .net MAUI frameworks",
    icon: "/illustration.webp",
  },
  {
    title: "UI/UX Design",
    description:
      "I design beautiful user interfaces for your web and mobile applications",
    icon: "/ui-ux.webp",
  },
  {
    title: "Machine Learning",
    description:
      "I build intelligent systems that learn from data and make predictions or decisions, using modern machine learning algorithms and tools.",
    icon: "/icons8-ai-96.png",
  },
  {
    title: "API Development and Integration",
    description:
      "I build flexible and efficient API's that can integrate with third parties, fetch data and push notifications",
    icon: "/api.png",
  },
  {
    title: "Security and Privacy",
    description:
      "I integrate industry-standard security protocols like OAuth and JWT for secure user authentication and authorization",
    icon: "/icons8-secure-96.png",
  },
  {
    title: "Technical Documentation",
    description:
      "I create clear, concise, and comprehensive technical documentation for your projects, ensuring easy understanding of complex concepts, processes, and systems.",
    icon: "/icons8-document-96.png",
  },
  {
    title: "Consultation",
    description:
      "I provide expert consultation services from strategy development to implementation to ensure your projects succeed and align with your business goals.",
    icon: "/consultation.svg",
  },
  {
    title: "Deployment and Integration",
    description:
      "I handle end-to-end deployment and integration, ensuring your applications are seamlessly launched and connected across platforms.",
    icon: "/icons8-deployment-96.png",
  },
];
