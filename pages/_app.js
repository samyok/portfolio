import {ChakraProvider, extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: "Poppins, Arial Black, Arial, Helvetica, Verdana, Tahoma, sans-serif",
        body: "Inter, Arial Black, Arial, Helvetica, Verdana, Tahoma, sans-serif"
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
