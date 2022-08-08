import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TextLink = (props) => (
  <Text fontSize={14} mx={2} onClick={(e) => props.onEdit?.(e)}>
    {props.icon && <FontAwesomeIcon icon={props.icon} />}
    <Link href={props.href} marginLeft={props.icon ? 2 : 0}>
      {props.children}
    </Link>
  </Text>
);

// if type is array, first one is default
const data = {
  email: ["sam@yok.dev", "nepal017@umn.edu"],
  phone: ["(###) ###-####", "(605) 592-6144"],
  github: ["/samyok", "github.com/samyok"],
  linkedin: ["/in/samyok", "linkedin.com/in/samyok"],
  url: ["yok.dev", "www.yok.dev", "//yok.dev"],
};

export const ResumeTop = ({ children, isEditing, ...props }) => {
  const [dataIndices, setDataIndices] = useState({
    email: 0,
    phone: 0,
    github: 0,
    linkedin: 0,
    url: 0,
  });

  const cycleData = (prop) => {
    return (e) => {
      // prevent default if editing
      if (isEditing) {
        e.preventDefault();
        // cycle data indices of prop
        if (data[prop]) {
          setDataIndices((prev) => {
            const next = { ...prev };
            next[prop] = (next[prop] + 1) % data[prop].length;
            return next;
          });
        }
      }
    };
  };

  const getValue = (prop) => {
    return data[prop][dataIndices[prop]];
  };

  return (
    <Box pt={4} px={2} textAlign={"center"}>
      <Heading size={"xl"} mb={1}>
        Samyok Nepal
      </Heading>
      <Flex justifyContent={"center"}>
        <TextLink href={`mailto:${getValue("email")}`} onEdit={cycleData("email")} icon={faPaperPlane}>
          {getValue("email")}
        </TextLink>
        <TextLink href={`tel:${getValue("phone")}`} onEdit={cycleData("phone")} icon={faPhone}>
          {getValue("phone")}
        </TextLink>
      </Flex>
      <Flex justifyContent={"center"} mt={0.5}>
        <TextLink href={"https://yok.dev"} onEdit={cycleData("url")} icon={faGlobe}>
          {getValue("url")}
        </TextLink>
        <TextLink href={"https://github.com/samyok"} onEdit={cycleData("github")} icon={faGithub}>
          {getValue("github")}
        </TextLink>
        <TextLink href={"https://linkedin.com/in/samyok"} onEdit={cycleData("linkedin")} icon={faLinkedin}>
          {getValue("linkedin")}
        </TextLink>
      </Flex>
    </Box>
  );
};
