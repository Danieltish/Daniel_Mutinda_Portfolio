"use client";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // To include your picture

const roles = [
  "Web Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "SEO Expert",
  "Entrepreneur",
  "Data Analyst",
  "ML Engineer",
  "Photo Editor",
  "API Developer",
  "Brand Promoter",
  "Technical Writer",
  "Book Lover",
  "Deep Worker"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50; // Typing speed in milliseconds
  const deletingSpeed = 20; // Deleting speed in milliseconds
  const pauseDuration = 1200; // Pause before deleting

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];
      if (!isDeleting) {
        setDisplayedText((prev) => fullText.substring(0, prev.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayedText((prev) => fullText.substring(0, prev.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <Flex className="bg-cover h-screen flex items-center justify-center relative bg-[url('/hero-bg.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <SimpleGrid
        className="z-10 w-full px-6 md:px-20 lg:px-32 text-white"
        columns={{ base: 1, md: 2 }}
        spacing={8}
      >
        <Stack spacing={6} textAlign="center" className="mx-auto">
          <Heading className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I&apos;m <br />
            <Box as="span" className="text-primary">
              Daniel Mutinda
            </Box>
          </Heading>
          <Text className="text-2xl sm:text-3xl font-semibold h-12">
            A{" "}
            <Box as="span" className="text-primary">
              {displayedText}
            </Box>
          </Text>
        </Stack>

        {/* Image of Daniel Mutinda */}
        <Stack className="overflow-hidden" alignSelf="end">
          <Image
            src="/hero.webp" // Your image path
            alt="Hero"
            width={500}
            height={500}
            className="object-cover rounded-full shadow-lg mx-auto md:w-[600px] lg:w-[700px]"
          />
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};

export default Hero;
