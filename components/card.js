import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import DevPostIcon from "./DevPost";
import { Box, Button, chakra, Collapse, Flex, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";
import MyHeading from "./MyHeading";
import { imgSrc } from "../pages";

export function Card({ project, collapsible, filterTags }) {
  if (!filterTags) filterTags = [];
  const cardPadding = [3, 5, 10];

  function createButton(btn) {
    const templates = {
      github: {
        text: "Github",
        colorScheme: "black",
        variant: "outline",
        _hover: { bg: "rgba(0,0,0,0.2)" },
        _active: { bg: "rgba(0,0,0,0.4)" },
        leftIcon: <AiOutlineGithub size={"1.5em"} />,
      },
      link: {
        variant: "solid",
        colorScheme: "blue",
        text: "Demo",
        leftIcon: <AiOutlineLink size={"1.5em"} />,
      },
      devpost: {
        _hover: { bg: "rgba(40,103,178,0.2)" },
        _active: { bg: "rgba(40,103,178,0.4)" },
        variant: "outline",
        colorScheme: "blue",
        leftIcon: <DevPostIcon size={"1.5em"} />,
        text: "Devpost",
      },
    };
    let opts = { ...templates[btn.type], ...btn };
    return (
      <Button
        key={JSON.stringify(btn)}
        m={1}
        onClick={() => {
          window?.umami?.trackEvent(
            `proj.${project.title.replace(/ /g, "_")}.${btn.text || opts.text}.click`,
            "project_button"
          );
          window.open(btn.href, "_blank");
        }}
        {...opts}>
        {btn.text || opts.text}
      </Button>
    );
  }

  let tags = project.tags?.map((a) => (
    <Tag key={"tag:" + a} size="md" colorScheme={!!collapsible ? "blackAlpha" : "whiteAlpha"} mr={2} mt={2}>
      <TagLabel fontWeight={filterTags.includes(a) ? "extrabold" : "extrabold"}>{a}</TagLabel>
    </Tag>
  ));

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: !collapsible || true });

  // no overlap
  if (
    [...new Set([...filterTags, ...project.tags])].length === project.tags.length + filterTags.length &&
    filterTags.length !== 0
  )
    return null;
  return (
    <Box
      onClick={(e) => {
        if (e.target.tagName !== "BUTTON" && !!collapsible) {
          // onToggle();
          if (project.buttons[0]) window.open(project.buttons[0].href, "_blank");
        }
      }}
      mx={[2, 5]}
      mb={16}
      shadow={"2xl"}
      pb={[5, 10]}
      borderRadius={10}
      borderWidth={1}
      borderColor={"gray.200"}
      maxWidth={!collapsible ? "700px" : "700px"}
      _hover={
        !!collapsible && project.buttons[0]
          ? {
              bg: "rgba(0,0,0,0.02)",
              cursor: "pointer",
            }
          : undefined
      }>
      {!collapsible && (
        <Box
          borderTopRadius={10}
          mb={[5, 10]}
          p={0}
          bgImage={imgSrc(project.bgImage)}
          backgroundPosition={"center"}
          bgSize={"cover"}
          overflow={"hidden"}
          position={"relative"}>
          <Flex
            flexDirection={"column"}
            bgColor={"rgba(0,0,0,0.8)"}
            px={cardPadding}
            pb={6}
            pt={[20, 40, 60]}
            height={"100%"}
            borderTopRadius={10}
            alignItems={"space-between"}
            justifyContent={"space-between"}
            transitionDuration={"500ms"}
            _hover={{
              transform: "scale(2)",
              opacity: 0,
              cursor: "pointer",
            }}
            onClick={() => {
              if (project.buttons.length) {
                window?.umami?.trackEvent(
                  `proj.${project.title.replace(/ /g, "_")}.img.click`,
                  "project_button"
                );
                window.open(project.buttons[0].href, "_blank");
              }
            }}>
            <Flex mb={2} flexWrap={"wrap"}>
              {tags}
            </Flex>

            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <MyHeading size={"xl"} color={"white"} pb={0}>
                {project.title}
              </MyHeading>
              <chakra.p color={"gray.100"} fontSize={"sm"} textAlign={"right"} alignSelf={"flex-end"}>
                {project.subtext}
              </chakra.p>
            </Flex>
          </Flex>
        </Box>
      )}
      {!!collapsible && (
        <Box borderTopRadius={10} mb={0} p={0} bgSize={"cover"}>
          <Flex
            flexDirection={"column"}
            px={cardPadding}
            borderTopRadius={10}
            alignItems={"space-between"}
            justifyContent={"space-between"}
            pt={10}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <MyHeading size={"xl"} pb={0}>
                {project.title}
              </MyHeading>

              <chakra.p color={"gray.600"} fontSize={"xs"}>
                {project.subtext}
              </chakra.p>
            </Flex>
            <Flex mb={2} flexWrap={"wrap"}>
              {tags}
            </Flex>
          </Flex>
        </Box>
      )}
      <Collapse in={isOpen} startingHeight={1}>
        {project.description.split("\n").map((p, i) => (
          <chakra.p px={cardPadding} key={"p" + i} m={0}>
            {p}&nbsp;
          </chakra.p>
        ))}
        <Flex
          justifyContent={["center", "flex-start"]}
          px={cardPadding.map((a) => a - 1)}
          mt={3}
          wrap={"wrap"}>
          {project.buttons?.map((btn) => createButton(btn))}
        </Flex>
      </Collapse>
    </Box>
  );
}
