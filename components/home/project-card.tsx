import { Box, Flex, Image, Skeleton, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  href: string;
  tech: string[];
  height?: string;
  transitionDuration?: number;
  slide?: boolean;
}

const ProjectCard = ({
  image,
  name,
  href,
  tech,
  transitionDuration = 30, // Set to 20 seconds for a very slow transition
  slide = true,
  height = "25rem",
}: Props) => {
  return (
    <Box
      overflow="hidden"
      borderRadius="xl"
      border="1px solid"
      _hover={{ boxShadow: "2xl" }}
      transition="box-shadow 0.3s ease-in-out"
    >
      <Stack height="fit-content" boxShadow="md" align="center">
        {/* Project Image (No Link) */}
        <Box
          overflow="hidden"
          cursor="pointer"
          h={slide ? height : "fit-content"}
          w="100%"
          sx={{
            "> img": {
              transition: "transform 0.5s ease-out", // Default transition when not hovered (0.2s)
            },
            "&:hover > img": {
              transform: slide ? "translateY(-100%)" : "scale(1.05)", // Slide effect on hover
              transitionDuration: `${transitionDuration}s`, // 20s when hovered
            },
            "&:not(:hover) > img": {
              transform: slide ? "translateY(0)" : "scale(1)", // Reset effect
              transitionDuration: "0.2s", // Fast transition when not hovered (0.2s)
            },
          }}
        >
          <Image
            src={image}
            w="100%"
            objectFit="cover"
            objectPosition="top center"
            alt={name}
            fallback={<Skeleton h="20rem" w="100%" />}
          />
        </Box>

        {/* Project Name with Link */}
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Text
            textAlign="center"
            fontWeight="600"
            fontSize="1.4rem"
            color="#eb7d24"
            py=".5rem"
            _hover={{ textDecoration: "underline" }} // Adds an underline on hover for better UX
          >
            {name}
          </Text>
        </Link>

        {/* Tech Stack */}
        <Flex mb=".5rem" wrap="wrap" justifyContent="center">
          {tech.map((t) => (
            <Tag key={t} colorScheme="customOrange" mx=".3rem" my=".2rem">
              {t}
            </Tag>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
