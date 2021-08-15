import Head from 'next/head'
import MyHeading from "../components/MyHeading";
import {
    Avatar,
    Box,
    Button,
    chakra,
    Flex,
    HStack,
    Input,
    Link,
    Text,
    Textarea,
    useToast,
    VStack
} from "@chakra-ui/react";
import {AiFillLinkedin, AiFillMail, AiOutlineGithub, AiOutlineMail, AiOutlineSend} from "react-icons/ai";
import projects from "../components/projects";
import {AnimatedText} from "../components/animatedText";
import styles from '../styles/animatedBlink.module.css';
import {Project} from "../components/project";
import {Contactform} from "../components/contactform";

export function imgSrc(url) {
    return `https://bcdn.samyok.us/_next/image?url=${url}&w=3840&q=1`
}

export default function Home() {
    const wordChanged = (newIndex) => {
        console.log({newIndex});
    }
    return (
        <chakra.div bg={'#F0F0F0'} minHeight={"100vh"}>
            <Head>
                <title>Samyok Nepal</title>
                <meta name="description" content="Hey! I'm Samyok Nepal, a coder in the midwest."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Flex p={5} position={'absolute'} right={0} top={0} wrap={'wrap'} justifyContent={'center'}
                      alignItems={'center'}>
                    <Flex width={'100%'} justifyContent={'center'}>
                        <Avatar display={['block', 'none']} mx={3} size="md" name="Samyok Nepal"
                                src={imgSrc("https://cdn.samyok.us/img/senior_picture_circle_small.png")}/>
                    </Flex>
                    <Link my={2} mx={3} href={'#projects'}>Projects</Link>
                    <Link my={2} mx={3} href={'/press'}>Articles</Link>
                    <Link my={2} mx={3} href={'#resume'}>Resume</Link>
                    <Link my={2} mx={3} href={'/contact'}>Contact</Link>
                    <Link display={['none', 'block']} mx={3} href={'https://github.com/samyok'}
                          target={'_blank'}><AiOutlineGithub size={'2em'}/></Link>
                    <Link display={['none', 'block']} mx={3} href={'https://linkedin.com/in/samyok'}
                          target={'_blank'}><AiFillLinkedin
                        size={'2em'}/></Link>
                    <Link display={['none', 'block']} mx={3} href={'mailto:samyok@samyok.us'}
                          target={'_blank'}><AiOutlineMail
                        size={'2em'}/></Link>
                    <Link href={'/'}>
                        <Avatar display={['none', 'block']} mx={3} size="md" name="Samyok Nepal"
                                src={imgSrc("https://cdn.samyok.us/img/senior_picture_circle_small.png")}/>
                    </Link>
                </Flex>
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
                {projects.map(proj => <Project projSection={proj} key={JSON.stringify(proj)}/>)}
            </main>
            <Contactform/>
            <Flex bg={'rgba(0,0,0,0.2)'} width={'100%'} p={5} m={0} flexDir={'column'}>
                <Flex justifyContent={'center'} flexWrap={'wrap'} pb={5}>
                    <Link m={2} href={"https://github.com/samyok"} target={'_blank'}>
                        <Flex m={2} alignItems={'center'}>
                            <AiOutlineGithub size={'2em'}/>
                            <chakra.p ml={2} fontFamily={'Fira Code'}>/samyok</chakra.p>
                        </Flex>
                    </Link>
                    <Link m={2} href={"https://linkedin.com/in/samyok"} target={'_blank'}>
                        <Flex m={2} alignItems={'center'}>
                            <AiFillLinkedin size={'2em'}/>
                            <chakra.p ml={2} fontFamily={'Fira Code'}>/in/samyok</chakra.p>
                        </Flex>
                    </Link>
                    <Link m={2} href={"mailto:samyok@samyok.us"} target={'_blank'}>
                        <Flex m={2} alignItems={'center'}>
                            <AiOutlineMail size={'2em'}/>
                            <chakra.p ml={2} fontFamily={'Fira Code'}>samyok@samyok.us</chakra.p>
                        </Flex>
                    </Link>
                </Flex>
                <Text textAlign={'center'} color={'gray.900'} fontSize={'sm'}>Portfolio made by Samyok Nepal | <Link href={'https://github.com/samyok/portfolio'}>Github</Link></Text>
            </Flex>
        </chakra.div>
    )
}


