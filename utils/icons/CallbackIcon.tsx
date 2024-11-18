"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const CallbackIcon = (props: ChakraProps) => {
  return <Icon as={FaWhatsapp} {...props} />;
};

export default CallbackIcon;
