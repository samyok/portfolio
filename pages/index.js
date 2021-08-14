import Head from 'next/head'
import MyHeading from "../components/MyHeading";
import {
    Avatar,
    Box,
    Button,
    chakra,
    Collapse,
    Flex,
    HStack,
    Link,
    SlideFade,
    Tag,
    TagCloseButton,
    TagLabel,
    useDisclosure
} from "@chakra-ui/react";
import {useState} from "react";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineLink} from "react-icons/ai";
import DevPostIcon from "../components/DevPost";
import projects from "../components/projects";
import {AnimatedText} from "../components/animatedText";


export default function Home() {


    const wordChanged = (newIndex) => {
        console.log({newIndex});
    }

    return (
        <chakra.div bg={'#F0F0F0'} minHeight={"100vh"} pb={20}>
            <Head>
                <title>Samyok Nepal</title>
                <meta name="description" content="Hey! I'm Samyok Nepal, a coder in the midwest."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <HStack spacing={8} p={5}>
                    <Avatar size="md" name="Samyok Nepal"
                            src="https://cdn.samyok.us/img/senior_picture_circle_small.png?a"/>
                    <Link href={'#projects'}>Projects</Link>
                    <Link href={'#press'}>Articles</Link>
                    <Link href={'#resume'}>Resume</Link>
                    <Link href={'/contact'}>Contact</Link>
                    <Link href={'https://github.com/samyok'} target={'_blank'}><AiOutlineGithub size={'2em'}/></Link>
                    <Link href={'https://linkedin.com/in/samyok'} target={'_blank'}><AiFillLinkedin
                        size={'2em'}/></Link>
                </HStack>
                <Flex justifyContent={'center'}
                      alignItems={'center'}
                      flexDirection={'column'}
                      pt={[12, 32, 40]}
                      minHeight={'65vh'}>
                    <MyHeading
                        display={'inline'}
                        py={5}
                        mb={20}
                        borderRadius={10}
                        bg={'white'}
                        as={'h1'}
                        px={[2, 5]}
                        textAlign={'center'}
                        size={'4xl'}>
                        👋 Hi, I&apos;m Samyok Nepal
                    </MyHeading>
                    <AnimatedText wordChangedCallback={wordChanged}/>
                </Flex>
                {projects.map(proj => <Project projSection={proj} key={JSON.stringify(proj)}/>)}
            </main>
        </chakra.div>
    )
}

function Project({projSection}) {
    const [selectedTags, setSelectedTags] = useState([]);

    const tagControl = useDisclosure({defaultIsOpen: true});

    console.log({selectedTags});

    let tags = [...new Set(projSection.data.map(b => b.tags).flat())]
    return <Box>
        <Flex alignItems={'center'} justifyContent={'center'} mx={[2, 5, 20]} pt={20}
              pb={2}>
            <MyHeading display={'inline'} px={3} py={2} borderRadius={10} bg={'white'}
                       size={'2xl'}>{projSection.title}</MyHeading>
        </Flex>
        <chakra.p px={[2, 5, 20]} textAlign={'center'} py={2} color={'gray.700'}>{projSection.details}</chakra.p>
        <SlideFade offsetY={'20px'} animateOpacity in={tagControl.isOpen}>
            <Flex mb={12} px={[2, 5, 20]} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
                {
                    tags.map(a =>
                        <Tag key={"tag:" + a}
                             size="md"
                             colorScheme="blackAlpha"
                             bg={selectedTags.includes(a) ? 'rgba(0,0,0,0.3)' : undefined}
                             color={selectedTags.includes(a) ? 'white' : undefined}
                             borderRadius="full"
                             _hover={{
                                 cursor: "pointer",
                                 bg: "rgba(0,0,0,0.1)"
                             }}
                             onClick={() => {
                                 setSelectedTags(p => {
                                     let pv = [...p];
                                     if (pv.includes(a)) {
                                         pv.splice(pv.indexOf(a), 1);
                                     } else {
                                         pv.push(a);
                                     }
                                     return pv;
                                 })
                             }}
                             mr={2} mt={2}>
                            <TagLabel>{a}</TagLabel>
                            {selectedTags.includes(a) && <TagCloseButton/>}
                        </Tag>)
                }
            </Flex>
        </SlideFade>
        <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} alignItems={'flex-start'}>
            {projSection.data.map(project => <Card filterTags={selectedTags}
                                                   collapsible={projSection.collapsible ?? false} project={project}
                                                   key={JSON.stringify(project)}/>)}
        </Flex>
    </Box>
}

function Card({project, collapsible, filterTags}) {
    if (!filterTags) filterTags = [];
    const cardPadding = [3, 5, 10];

    function createButton(btn) {
        const templates = {
            github: {
                text: "Github",
                colorScheme: 'black',
                variant: 'outline',
                _hover: {bg: 'rgba(0,0,0,0.2)'},
                _active: {bg: 'rgba(0,0,0,0.4)'},
                leftIcon: <AiOutlineGithub size={'1.5em'}/>,
            },
            link: {
                variant: "solid",
                colorScheme: "blue",
                text: "Demo",
                leftIcon: <AiOutlineLink size={'1.5em'}/>
            },
            devpost: {
                _hover: {bg: 'rgba(40,103,178,0.2)'},
                _active: {bg: 'rgba(40,103,178,0.4)'},
                variant: 'outline',
                colorScheme: 'blue',
                leftIcon: <DevPostIcon size={'1.5em'}/>,
                text: "Devpost"
            }
        }
        let opts = {...templates[btn.type], ...btn}
        return <Button key={JSON.stringify(btn)} m={1}
                       onClick={() => window.open(btn.href, "_blank")} {...opts}>{btn.text || opts.text}</Button>
    }

    let tags = project.tags?.map(a =>
        <Tag key={"tag:" + a}
             size="md"
             colorScheme={!!collapsible ? 'blackAlpha' : 'whiteAlpha'}
             borderRadius="full"
             mr={2} mt={2}>
            <TagLabel fontWeight={filterTags.includes(a) ? 'bold' : 'normal'}>{a}</TagLabel>
        </Tag>)

    const {isOpen, onToggle} = useDisclosure({defaultIsOpen: !collapsible || true})

    // no overlap
    if ([...new Set([...filterTags, ...project.tags])].length === project.tags.length + filterTags.length && filterTags.length !== 0)
        return null;
    return <Box
        onClick={e => {
            if (e.target.tagName !== "BUTTON" && !!collapsible)
                onToggle();
        }}
        mx={[2, 5]}
        mb={16}
        shadow={'2xl'}
        pb={[5, 10]}
        borderRadius={10}
        borderWidth={1}
        borderColor={'gray.200'}
        maxWidth={!collapsible ? '700px' : '700px'}
        _hover={!!collapsible ? {
            bg: 'rgba(0,0,0,0.02)',
            cursor: 'pointer'
        } : undefined}
    >
        {!collapsible &&
        <Box borderTopRadius={10} mb={[5, 10]} p={0} bgImage={project.bgImage} backgroundPosition={'center'}
             bgSize={'cover'}>
            <Flex
                flexDirection={'column'} bgColor={'rgba(0,0,0,0.8)'} px={cardPadding} pb={6} pt={[20, 40, 60]}
                height={'100%'} borderTopRadius={10} alignItems={'space-between'}
                justifyContent={'space-between'}>

                <Flex mb={2} flexWrap={'wrap'}>
                    {tags}
                </Flex>

                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <MyHeading size={'xl'} color={'white'} pb={0}>{project.title}</MyHeading>

                    <chakra.p color={'gray.100'} fontSize={'sm'} textAlign={'right'}>{project.subtext}</chakra.p>
                </Flex>
            </Flex>
        </Box>}
        {!!collapsible && <Box borderTopRadius={10} mb={0} p={0}
                               bgSize={'cover'}>
            <Flex
                flexDirection={'column'} px={cardPadding} borderTopRadius={10} alignItems={'space-between'}
                justifyContent={'space-between'} pt={10}>

                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <MyHeading size={'xl'} pb={0}>{project.title}</MyHeading>

                    <chakra.p color={'gray.600'} fontSize={'xs'}>{project.subtext}</chakra.p>
                </Flex>
                <Flex mb={2} flexWrap={'wrap'}>
                    {tags}
                </Flex>
            </Flex>
        </Box>}
        <Collapse in={isOpen} startingHeight={1}>
            {project.description.split('\n').map((p, i) => <chakra.p px={cardPadding} key={'p' + i}
                                                                     m={0}>{p}&nbsp;</chakra.p>)}
            <Flex justifyContent={['center', "flex-start"]} px={cardPadding.map(a => a - 1)} mt={3}
                  wrap={'wrap'}>
                {project.buttons?.map(btn => createButton(btn))}
            </Flex>
        </Collapse>

    </Box>
}


