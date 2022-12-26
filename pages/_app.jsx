import { Box, ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import theme from "../theme";
import Navbar from "../components/Navbar";
import GridBackground from "../components/GridBackground";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <Navbar currentPage={router.asPath} />
      <GridBackground />
      <Box maxW={750} margin={"auto"}>
        <Component {...pageProps} />
      </Box>

      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
