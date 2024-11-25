import { marginX } from "@/utils/constants";
import {
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
  YoutubeIcon,
} from "@/utils/icons";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box borderTop="2px solid gray" bg="brand.black">
      <Stack gap={3} mx={marginX} py="2rem" align="center">
        {/* Social Media Icons */}
        <Flex gap={4} justify="center">
          {socials.map((s, i) => (
            <Stack
              as="a"
              href={s.href}
              target="_black"
              key={i}
              bg="primary.600"
              p={2}
              borderRadius="xl"
              _hover={{
                bg: "gray.600",
              }}
            >
              <Box as={s.icon} boxSize={8} color="brand.white" />
            </Stack>
          ))}
        </Flex>

        {/* Phone Number */}
        <Flex direction="column" align="center" color="brand.white" gap={1}>
          <Text fontSize="lg" fontWeight="600">
            <a
              href="tel:+254717376964"
              style={{ color: "white", textDecoration: "none" }}
            >
              +254 717 376 964
            </a>
          </Text>
          <Text fontSize="sm">Call or WhatsApp</Text>
        </Flex>

        {/* Copyright */}
        <Flex color="brand.white">
          &copy; 2024 danielmutinda. All rights reserved.
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;

const socials = [
  {
    name: "WhatsApp",
    icon: PhoneIcon,
    href: "https://wa.link/sdyxpv",
  },
  {
    name: "LinkedIn",
    icon: MailIcon,
    href: "https://www.linkedin.com/in/daniel-mutinda-3a5851182/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/danielmutindadev/",
  },
  {
    name: "Github",
    icon: YoutubeIcon,
    href: "https://github.com/Danieltish/",
  },
  {
    name: "Twitter",
    icon: XIcon,
    href: "https://x.com/TitusTish",
  },
];
