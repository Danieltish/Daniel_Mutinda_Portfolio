"use client";
import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  VStack,
  Image,
} from "@chakra-ui/react";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu"; // Import close icon
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [isVisible, setIsVisible] = useState(true); // For scroll behavior

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMenu = () => setIsOpen(false); // Close menu handler

  return (
    <Box
      bg="brand.black"
      py="1.2rem"
      position="sticky"
      top="0"
      zIndex="1000"
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
      transition="transform 0.3s ease-in-out"
    >
      <Flex
        mx={{ base: "1rem", md: "3rem" }}
        as="nav"
        color="white"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Image
          src="/logo copy.png" // Ensure the path matches your public folder
          alt="Logo"
          boxSize={{ base: "40px", md: "60px" }} // Adjust size as needed
          objectFit="contain"
        />

        {/* Desktop Navigation */}
        <Flex gap={4} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Text
              key={item.href}
              as="a"
              href={item.href}
              fontSize="lg"
              fontWeight="600"
              _hover={{ color: "primary" }}
            >
              {item.label}
            </Text>
          ))}
        </Flex>

        {/* Desktop Contact Button and Phone Number */}
        <Flex align="center" display={{ base: "none", md: "flex" }} gap={4}>
          {/* Phone Number */}
          <Text
            fontSize="lg"
            fontWeight="600"
            color="white"
            _hover={{ color: "primary" }}
            display="flex"
            alignItems="center"
          >
            <span>+254717376964</span>
          </Text>

          {/* Contact Button */}
          <Button
            colorScheme="primary"
            as="a"
            href="#contact"
            borderRadius="xl"
            rightIcon={<LuArrowRight />}
          >
            Write Me
          </Button>
        </Flex>

        {/* Mobile Hamburger Menu Button */}
        <IconButton
          icon={isOpen ? <LuX /> : <LuMenu />} // Toggle between hamburger and close icon
          variant="outline"
          color="white"
          display={{ base: "flex", md: "none" }}
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          border="none"
          _hover={{ bg: "gray.700" }}
        />

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <Box
            position="absolute"
            top="4rem"
            left="0"
            width="100%"
            bg="brand.black"
            zIndex="999"
            display={{ base: "block", md: "none" }}
          >
            <VStack spacing={4} align="center" py={4}>
              {navItems.map((item) => (
                <Text
                  key={item.href}
                  as="a"
                  href={item.href}
                  fontSize="lg"
                  fontWeight="600"
                  _hover={{ color: "primary" }}
                  onClick={handleCloseMenu} // Close menu on item click
                >
                  {item.label}
                </Text>
              ))}
            </VStack>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
