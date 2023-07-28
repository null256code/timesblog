"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "teal.200",
      },
    },
  },
  components: {
    Card: defineMultiStyleConfig({
      baseStyle: definePartsStyle({
        container: {
          backgroundColor: "white",
        },
      }),
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
