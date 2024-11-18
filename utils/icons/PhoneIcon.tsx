"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappIcon = (props: ChakraProps) => {
  return <Icon as={IoLogoWhatsapp} {...props} />;
};

export default WhatsappIcon;
