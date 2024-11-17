import { marginX } from "@/utils/constants";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Flex
      bgImg="/hero-bg.jpg"
      bgSize="cover"
      h="90vh"
      align="center"
      justify="center"
      pos="relative"
      _before={{
        content: '""',
        bg: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <SimpleGrid
        zIndex={2}
        mx={marginX}
        h="100%"
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        gap={8}
      >
        <Stack color="brand.white" gap={4}>
          <Heading fontSize={{ base: "2rem", md: "4.5rem" }}>
            Hello, I&apos;m{" "}
            <Box as="span" color="primary">
              Daniel Mutinda
            </Box>
          </Heading>
          <Text fontSize="2xl">
            A creative Software Developer with expertise in building responsive,
            high-performance and secure applications. My happiness comes
            from solving realworld problems using technology.
          </Text>
        </Stack>

        <Stack overflow="hidden" alignSelf="end">
          <Image
            src="/hero.webp"
            alt="Hero"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "80%",
              marginBottom: "-40%",
              objectFit: "contain",
            }}
          />
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};

export default Hero;
