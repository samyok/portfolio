import Head from 'next/head'
import MyHeading from "../components/MyHeading";
import {chakra, Flex} from "@chakra-ui/react";
import projects from "../data/projects";
import {AnimatedText} from "../components/animatedText";
import styles from '../styles/animatedBlink.module.css';
import {Project} from "../components/project";
import {Footer} from "../components/footer";
import Navigation from "../components/Navigation";

export function imgSrc(url) {
    const env = process.env.NODE_ENV;
    if (env === "development") {
        return url;
    } else if (env === "production") {
        return `https://bcdn.samyok.us/_next/image?url=${url}&w=3840&q=1`
    }
}

export default function Home() {
    const wordChanged = (newIndex) => {
        // console.log({newIndex});
    }
    return (
        <chakra.div bg={'#F0F0F0'} minHeight={"100vh"}>
            <Head>
                <title>Samyok Nepal</title>
                <meta name="description"
                      content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's a list of all my projects!"/>
                <meta property="og:url" content="https://samyok.us/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Samyok Nepal"/>
                <meta property="og:description"
                      content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's a list of all my projects!"/>
                <meta property="og:image" content="/og_image_index.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="samyok.us"/>
                <meta property="twitter:url" content="https://samyok.us/"/>
                <meta name="twitter:title" content="Samyok Nepal"/>
                <meta name="twitter:description"
                      content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's a list of all my projects!"/>
                <meta name="twitter:image" content="/og_image_index.png"/>
            </Head>

            <main>
                <Navigation/>
                <Flex justifyContent={'center'}
                      alignItems={'center'}
                      flexDirection={'column'}
                      pt={[60, 32, 40]}
                      minHeight={'75vh'}>
                    <MyHeading
                        display={'inline'}
                        py={5}
                        mb={20}
                        borderRadius={10}
                        // bg={'white'}
                        as={'h1'}
                        px={[2, 5]}
                        textAlign={'center'}
                        size={'4xl'}>
                        <chakra.span class={styles.wiggle}>👋</chakra.span>
                        Hi, I&apos;m Samyok Nepal
                    </MyHeading>
                    <MyHeading size={'lg'} color={'gray.400'} m={0} mb={-16} p={0} fontWeight={400}>What do I
                        do?</MyHeading>
                    <AnimatedText wordChangedCallback={wordChanged}/>
                </Flex>
                <div id={'projects'}/>
                {projects.map(proj => <Project projSection={proj} key={JSON.stringify(proj)}/>)}
            </main>
            <Footer/>
        </chakra.div>
    )
}


