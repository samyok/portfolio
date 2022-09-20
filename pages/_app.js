import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { Footer } from "../components/footer";

const theme = extendTheme({
  fonts: {
    heading:
      'Lato, Poppins, Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    body: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box bg={"#F0F0F0"} minHeight={"100vh"}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
