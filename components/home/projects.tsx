import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./project-card";
import { marginX } from "@/utils/constants";

const Projects = () => {
  return (
    <Stack id="projects" align="center" mx={marginX} my="4rem" gap="1rem">
      <Heading color="#eb7d24">My Projects</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            href={project.link}
            tech={project.tech}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Projects;

const projectsData = [
  {
    name: "Daniel Mutinda Portfolio",
    image: "/daniel-mutinda-portfolio.vercel.app_.png",
    link: "https://daniel-mutinda-portfolio.vercel.app/",
    tech: ["Next.js", "Chakra UI", "TypeScript"],
  },
  {
    name: "Smart Agro",
    image: "/smart-agro-bonface221.netlify.app_ (1).png",
    link: "https://smart-agro-bonface221.netlify.app/",
    tech: ["React", "Firebase", "CSS"],
  },
  {
    name: "Alas Cosmetic",
    image: "/alasfourcosmetics.com_.png",
    link: "https://alasfourcosmetics.com/",
    tech: ["React.js", "Typescript", "MySQL"],
  },
  {
    name: "CleanStart",
    image: "/cleanstartafrica.vercel.app_.png",
    link: "https://cleanstartafrica.vercel.app/",
    tech: ["Next.js", "Chakra UI", "TypeScript"],
  },

  {
    name: "Around Africa",
    image: "/around-africa.vercel.app_.png",
    link: "https://around-africa.vercel.app/",
    tech: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Gladys Munyori Portfolio",
    image: "/gladys-munyori.vercel.app_.png",
    link: "https://gladys-munyori.vercel.app/",
    tech: ["Next.js", "TypeScript", "Chakra UI"],
  },
  {
    name: "BTB Africa",
    image: "/btbafrica.vercel.app_.png",
    link: "https://btbafrica.vercel.app/",
    tech: ["Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    name: "Wines App",
    image: "/wines-bonface221.netlify.app_ (2).png",
    link: "https://wines-bonface221.netlify.app/",
    tech: ["React", "Netlify", "CSS"],
  },
  {
    name: "Core Staging",
    image: "/core-next.vercel.app_.png",
    link: "https://corestaging.netlify.app/",
    tech: ["React", "TypeScript", "Styled Components"],
  },
];
