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
                    size="md"
                    name="Samyok Nepal"
                    src={imgSrc("https://cdn.samyok.us/img/senior_picture_circle_small.png")}/>
        </Flex>
        <Link my={2} mx={3} href={'#contact'}>Contact</Link>
        <Link my={2} mx={3} href={'/resume'}>Resume</Link>
        <Link my={2} mx={3} href={'/press'}>Media Appearances</Link>
        <Link my={2} mx={3} href={'/#projects'}>Projects</Link>
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
                    size="md"
                    name="Samyok Nepal"
                    src={imgSrc("https://cdn.samyok.us/img/senior_picture_circle_small.png")}/>
        </Link>
    </Flex>
}
