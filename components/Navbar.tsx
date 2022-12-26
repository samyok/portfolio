import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
const NavLink = ({ href, children }: NavLinkProps): JSX.Element => {
  return (
    <Link
      fontSize={20}
      href={href}
      fontWeight={300}
      _hover={{
        textDecoration: "none",
      }}>
      {children}
    </Link>
  );
};

const MotionBox = motion(Box);

const LINKS = [
  { href: "/", label: "samyok", heading: true, desktopOnly: true },
  { href: "/", label: "home", mobileOnly: true },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
];

type NavbarProps = {
  currentPage: string;
};
export const DesktopNavbar = ({ currentPage }: NavbarProps): JSX.Element => {
  const [currentUnderline, setCurrentUnderline] = useState(currentPage);

  useEffect(() => {
    setCurrentUnderline(currentPage);
  }, [currentPage]);
  const { toggleColorMode, colorMode } = useColorMode();

  const underlineColor = useColorModeValue("pinkUnderline", "pinkUnderlineDark");
  return (
    <Box w={750} maxW={"95vw"} margin={"auto"} py={4}>
      <AnimateSharedLayout>
        <Flex justify={"space-between"} align={"center"}>
          <HStack alignItems={"flex-end"} spacing={12} onMouseLeave={() => setCurrentUnderline(currentPage)}>
            {LINKS.filter((link) => !link.mobileOnly).map((link) => {
              const component = link.heading ? (
                <NavLink href={link.href}>
                  <Heading fontSize={24} pb={"0px"}>
                    {link.label}
                  </Heading>
                </NavLink>
              ) : (
                <NavLink href={link.href}>{link.label}</NavLink>
              );

              return (
                <Box pos={"relative"} onMouseMove={() => setCurrentUnderline(link.href)} key={link.label}>
                  {component}
                  {currentUnderline === link.href && (
                    <MotionBox
                      layoutId={"underline"}
                      position={"absolute"}
                      bottom={"2px"}
                      left={"-3px"}
                      width={"calc(100% + 6px)"}
                      height={2}
                      bg={underlineColor}
                      zIndex={-1}
                      borderRadius={4}
                    />
                  )}
                </Box>
              );
            })}
          </HStack>
          <IconButton
            variant={"solid"}
            aria-label={"toggle theme"}
            size={"xs"}
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          />
        </Flex>
      </AnimateSharedLayout>
    </Box>
  );
};

export const MobileNavbar = ({ currentPage }: NavbarProps): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();

  const menuColor = useColorModeValue("background", "backgroundDark");
  return (
    <Box height={16} px={2} py={1}>
      <Flex justify={"space-between"} align={"center"}>
        <IconButton
          variant={"solid"}
          aria-label={"toggle theme"}
          size={"sm"}
          onClick={onToggle}
          icon={isOpen ? <FaTimes /> : <FaBars />}
        />
        <Button variant={"ghost"} onClick={onToggle}>
          <Heading fontSize={24}>samyok</Heading>
        </Button>
        <IconButton
          variant={"solid"}
          aria-label={"toggle theme"}
          size={"sm"}
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        />
      </Flex>
      <Box position={"fixed"} top={16} left={0} right={0}>
        <Collapse in={isOpen} animateOpacity>
          <VStack spacing={2} py={4} backgroundColor={menuColor}>
            {LINKS.filter((link) => !link.desktopOnly).map((link) => {
              const component = <NavLink href={link.href}>{link.label}</NavLink>;
              return (
                <Box pos={"relative"} key={link.label}>
                  {component}
                </Box>
              );
            })}
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default function Navbar(props: NavbarProps): JSX.Element {
  return (
    <Box>
      <Box display={["block", "none"]}>
        <MobileNavbar {...props} />
      </Box>
      <Box display={["none", "block"]}>
        <DesktopNavbar {...props} />
      </Box>
    </Box>
  );
}
