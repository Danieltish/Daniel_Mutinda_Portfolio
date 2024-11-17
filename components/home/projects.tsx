import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./project-card";
import { marginX } from "@/utils/constants";

const Projects = () => {
  return (
    <Stack id="projects" align="center" mx={marginX} my="4rem" gap="1rem">
      <Heading> My Projects</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {projectsData.map((p, i) => (
          <ProjectCard
            name={p.name}
            key={i}
            image={p.image}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Projects;

const projectsData = [
  {
    name: "Build using Next.js",
    image: "/portfolio1.webp",
  },
  {
    name: "Build using Next.js",
    image: "/portfolio2.webp",
  },
  {
    name: "Build using Next.js",
    image: "/portfolio3.webp",
  },
];
