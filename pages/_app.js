import {ChakraProvider, extendTheme} from "@chakra-ui/react"

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
