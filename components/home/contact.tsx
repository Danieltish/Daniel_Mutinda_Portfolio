'use client'; // Add this line to mark this component as a Client Component

import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "emailjs-com"; // Import EmailJS
import { FormEvent } from "react"; // Import FormEvent from React

const Contact = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    const form = e.target as HTMLFormElement;

    // Send the email using EmailJS
    emailjs
      .sendForm(
        "service_9koutm3", // Replace with your EmailJS service ID
        "template_eir8hde", // Replace with your EmailJS template ID
        form, // Form object containing form data
        "XBNSLiwlUB9Ig6_my" // Replace with your EmailJS public user ID (not the private key)
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email", error.text);
          alert("There was an error sending your message.");
        }
      );
  };

  return (
    <Box id="contact" bg="brand.black" color="brand.white" py="3rem">
      <Stack align="center" mx={marginX} gap={4}>
        <Heading>Contact Me</Heading>
        <Stack gap={6} align="center" mx="auto" minW="70%">
          <Text>Any project in mind or comment? Reach out</Text>

          <form onSubmit={sendEmail}>
            {" "}
            {/* Add onSubmit handler */}
            <Flex gap={2} w="100%">
              <FormControl>
                <Input name="name" bg="gray.700" placeholder="Name" />
              </FormControl>
              <FormControl>
                <Input
                  name="email"
                  bg="gray.700"
                  placeholder="Email"
                  type="email"
                />
              </FormControl>
            </Flex>
            <Flex gap={2} w="100%">
              <FormControl>
                <Input
                  name="phone"
                  bg="gray.700"
                  placeholder="Phone"
                  type="tel"
                />
              </FormControl>
              <FormControl>
                <Input name="subject" bg="gray.700" placeholder="Subject" />
              </FormControl>
            </Flex>
            <Textarea name="comment" bg="gray.700" placeholder="Comment" />
            <Flex justify="center" mt={4}>
              <Button type="submit" w="fit-content" colorScheme="primary">
                Submit
              </Button>
            </Flex>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
