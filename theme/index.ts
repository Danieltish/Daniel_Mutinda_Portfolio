import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: "primary.500",
    },
  },
  fonts: {
    heading: "inherit",
  },
  colors: {
    brand: {
      black: "#1A202C",
      white: "#FFFFFF",
    },

    primary: {
      100: "#FEEFD2",
      200: "#FDDBA7",
      300: "#F9C07A",
      400: "#F3A658",
      500: "#EB7D24",
      600: "#CA5F1A",
      700: "#A94512",
      800: "#882E0B",
      900: "#701F06",
    },
    customOrange: {
      50: "#f6e0cc", // lightest shade
      100: "#f0b27a", // light shade
      200: "#eb7d24", // main color
      300: "#e5640f", // darker shade
      400: "#cc520e", // even darker shade
      500: "#b8410d", // darkest shade
    },
  },
});
