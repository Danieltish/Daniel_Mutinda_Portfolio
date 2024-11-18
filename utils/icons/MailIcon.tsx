"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoLogoLinkedin } from "react-icons/io5";

const LinkedInIcon = (props: ChakraProps) => {
  return <Icon as={IoLogoLinkedin} {...props} />;
};

export default LinkedInIcon;
