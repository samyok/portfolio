import {Avatar, Flex, Link} from "@chakra-ui/react";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineUser} from "react-icons/ai";
import {HiMail} from "react-icons/hi";
import {imgSrc} from "../pages/index";

export default function Navigation() {
    return <Flex p={5} position={'absolute'} left={0} top={0} wrap={'wrap'} justifyContent={'center'}
                 flexDir={'row-reverse'}
                 alignItems={'center'}>
        <Flex width={'100%'} justifyContent={'center'}>
            <Avatar display={['block', 'block', 'none']}
                    mx={3}
                    bg={'transparent'}
                    icon={<AiOutlineUser size={'2em'}/>}
                    size="xl"
                    name="Samyok Nepal"
                    src={imgSrc("https://cdn.samyok.us/img/sunglasses.jpeg")}/>
        </Flex>
        <Link fontSize={20} my={2} mx={4} href={'#contact'}>Contact</Link>
        <Link fontSize={20} my={2} mx={4} href={'/resume'}>Resume</Link>
        <Link fontSize={20} my={2} mx={4} href={'/press'}>News Features</Link>
        <Link fontSize={20} my={2} mx={4} href={'/#projects'}>Projects</Link>
        <Link display={['none', 'block']} mx={3} href={'https://github.com/samyok'}
              target={'_blank'}><AiOutlineGithub size={'2em'}/></Link>
        <Link display={['none', 'block']} mx={3} href={'https://linkedin.com/in/samyok'}
              target={'_blank'}><AiFillLinkedin
            size={'2em'}/></Link>
        <Link display={['none', 'block']} mx={3} href={'mailto:samyok@samyok.us'}
              target={'_blank'}><HiMail
            size={'2em'}/></Link>
        <Link href={'/'}>
            <Avatar display={['none', 'none', 'block']}
                    mx={3}
                    bg={'transparent'}
                    icon={<AiOutlineUser size={'2em'}/>}
                    size="xl"
                    name="Samyok Nepal"
                    src={imgSrc("https://cdn.samyok.us/img/sunglasses.jpeg")}/>
        </Link>
    </Flex>
}
