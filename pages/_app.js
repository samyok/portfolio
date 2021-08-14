import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/fira-code/700.css";
import "@fontsource/inter";

const theme = extendTheme({
    fonts: {
        heading: "Poppins",
        body: "Inter"
    }
})


function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
