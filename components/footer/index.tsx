import { marginX } from "@/utils/constants";
import { InstagramIcon, MailIcon, PhoneIcon, XIcon } from "@/utils/icons";
import { Box, Flex, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box borderTop="2px solid gray" bg="brand.black">
      <Stack gap={3} mx={marginX} py="2rem" align="center">
        <Flex gap={4}>
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
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/danielmutindadev/",
  },
  {
    name: "Twitter",
    icon: XIcon,
    href: "https://x.com/TitusTish",
  },
  {
    name: "Call",
    icon: PhoneIcon,
    href: "tel:+254717376964",
  },
  {
    name: "Email",
    icon: MailIcon,
    href: "mailto:danieltmutinda@gmail.com",
  },
];
