import { Avatar, Box, Flex, Heading, Hide, HStack, Link, Text } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { imgSrc } from "../pages/index";
import { useRouter } from "next/router";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";

const SelfPortrait = () => (
  <Avatar
    mx={3}
    bg={"transparent"}
    icon={<AiOutlineUser size={"2em"} />}
    size="xl"
    name="Samyok Nepal"
    src={imgSrc("/img/sunglasses.jpeg")}
  />
);

const Pages = () => {
  const LINKS = [
    { name: "Projects", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "#contact" },
  ];

  const router = useRouter();
  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <HStack spacing={4} alignItems={"center"}>
      {LINKS.map(({ name, href }) => (
        <NextLink key={href} href={href} passHref>
          <Link isActive={isActive(href)}>
            <Text fontSize={14} fontWeight={isActive(href) ? 500 : 300}>
              {name}
            </Text>
          </Link>
        </NextLink>
      ))}
    </HStack>
  );
};

const SocialLinks = () => {
  const LINKS = [
    { name: "/samyok", icon: faGithub, href: "https://github.com/samyok" },
    { name: "/in/samyok", icon: faLinkedin, href: "https://linkedin.com/in/samyok" },
    // { name: "sam@yok.dev", icon: faPaperPlane, href: "mailto:sam@yok.dev" },
  ];
  return (
    <HStack spacing={4} alignItems={"center"}>
      {LINKS.map(({ name, icon, href }) => (
        <Link key={href} href={href} isExternal>
          <Text fontSize={14} fontWeight={400}>
            {icon && (
              <Box width={4} pr={4} display={"inline-block"}>
                <FontAwesomeIcon icon={icon} />
              </Box>
            )}
            {name}
          </Text>
        </Link>
      ))}
    </HStack>
  );
};

export default function Navigation() {
  return (
    <Hide breakpoint={"print"}>
      <Flex justifyContent={"center"}>
        <Flex p={5} justifyContent={"space-between"} alignItems={"center"} flexGrow={1} maxW={1250}>
          {/*   LEFT SIDE    */}
          <Flex alignItems={"center"}>
            <SelfPortrait />
            <Flex flexDir={"column"} pl={2}>
              <Heading size={"xl"} mb={1}>
                Samyok Nepal
              </Heading>
              <Pages />
            </Flex>
          </Flex>
          {/*   RIGHT SIDE    */}
          <Flex display={["none", "none", "block"]}>
            <SocialLinks />
          </Flex>
        </Flex>
      </Flex>
    </Hide>
  );
}
