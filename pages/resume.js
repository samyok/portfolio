import Head from 'next/head';
import MyHeading from "../components/MyHeading";
import {Box, chakra, HStack, IconButton} from "@chakra-ui/react";
import {Footer} from "../components/footer";
import Navigation from "../components/Navigation";
import {Viewer, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {AiOutlineZoomIn, AiOutlineZoomOut} from "react-icons/ai"

const toolBarButtonProps = {
    colorScheme: "blackAlpha",
    variant: "solid",
    "aria-label": 'button',
}

const renderToolbar = Toolbar => (
    <Toolbar>
        {slots => {
            const {ZoomOut, ZoomIn} = slots;
            return (
                <Box>

                    <HStack spacing={2}>
                        <IconButton/>
                        <ZoomIn>
                            {props => <IconButton onClick={props.onClick} icon={<AiOutlineZoomIn size={'1.5em'}/>}/>}
                        </ZoomIn>
                        <ZoomOut>
                            {props => <IconButton variant={'solid'} colorScheme={'blackAlpha'} onClick={props.onClick}
                                                  icon={<AiOutlineZoomOut size={'1.5em'}/>} aria-label={'button'}/>}
                        </ZoomOut>
                    </HStack>
                </Box>
            );
        }}
    </Toolbar>
)

export default function Resume() {
    const wordChanged = (newIndex) => {
        // console.log({newIndex});
    }
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: defaultTabs => {
            console.log({defaultTabs});
            return [defaultTabs[0]]
        },
        // renderToolbar
    });

    return (
        <chakra.div bg={'#F0F0F0'} minHeight={"100vh"}>
            <Head>
                <title>Samyok Nepal</title>
                <meta name="description"
                      content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's a list of every time I have been in the news!"/>
                <meta property="og:url" content="https://samyok.us/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Samyok Nepal: In the news"/>
                <meta property="og:description"
                      content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's a list of every time I have been in the news!"/>
                <meta property="og:image" content="/og_image_index.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="samyok.us"/>
                <meta property="twitter:url" content="https://samyok.us/"/>
                <meta name="twitter:title" content="Samyok Nepal"/>
                <meta name="twitter:description"
                      content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's a list of every time I have been in the news!"/>
                <meta name="twitter:image" content="/og_image_index.png"/>
            </Head>

            <main>
                <Navigation/>
                <Box px={[2, 5, 10]} pt={[200, 150]} minH={'100vh'} pb={20}>
                    <MyHeading as={'h1'}>Resume</MyHeading>
                    <chakra.p>Click <chakra.a _hover={{
                        textDecoration: 'underline'
                    }} href="https://cdn.samyok.us/SamyokNepalResume.pdf">here</chakra.a> to download my
                        resume.
                    </chakra.p>
                    <Box pt={4}>
                        <Worker workerUrl="/pdf.worker.min.js">
                            <Viewer
                                fileUrl="https://cdn.samyok.us/SamyokNepalResume.pdf"
                                plugins={[defaultLayoutPluginInstance]}
                            />
                        </Worker>
                        <style> {`
                            .rpv-core__display--hidden.rpv-core__display--block-medium:nth-child(3) {
                                display: none;
                            }`}
                        </style>
                    </Box>
                </Box>
            </main>
            <Footer/>
        </chakra.div>
    )
}


