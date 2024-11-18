"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const GithubIcon = (props: ChakraProps) => {
  return <Icon as={FaGithub} {...props} />;
};

export default GithubIcon;
