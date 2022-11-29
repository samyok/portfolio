import { Box, ChakraProvider } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { Footer } from "../components/footer";
import theme from "../theme";

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
