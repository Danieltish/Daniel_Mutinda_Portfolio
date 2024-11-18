"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa6";

const LinkedinIcon = (props: ChakraProps) => {
  return <Icon as={FaLinkedin} {...props} />;
};

export default LinkedinIcon;
