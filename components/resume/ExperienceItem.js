import { Box, Collapse, Flex, Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import ReactMarkdown from "react-markdown";
import { MiniMarkdown } from "../MiniMarkdown";

export const ExperienceItem = ({ item, selectedTags, locationFirst }) => {
  const isSelected = !item.tags || selectedTags.some((tag) => item.tags.includes(tag));

  const Parens = () => {
    if (!item.url && !item.parens) return null;

    const parenText = item.url ?? item.parens;
    if (item.href) {
      return (
        <Text fontSize={12} fontWeight={300} p={0} m={0} as={"span"} display={"inline-block"} pl={1}>
          (
          <Link href={item.href} target={"_blank"}>
            {parenText}
          </Link>
          )
        </Text>
      );
    } else {
      return (
        <Text fontSize={12} fontWeight={300} p={0} m={0} as={"span"} display={"inline-block"} pl={1}>
          ({parenText})
        </Text>
      );
    }
  };

  let tagline = item.location;
  if (locationFirst && item.title) tagline += ", " + item.title;
  else if (item.title) tagline = item.title + ", " + tagline;

  return (
    <Collapse in={isSelected}>
      <Box px={1} py={1}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading
            as="h3"
            size="md"
            fontWeight={500}
            fontSize={14}
            fontFamily={"Inter"}
            alignItems={"center"}>
            {tagline}
            <Parens />
          </Heading>
          <Text fontWeight={400} fontSize={14}>
            {item.date}
          </Text>
        </Flex>
        <UnorderedList pl={1}>
          {item.info?.map((i) => (
            <ListItem key={i} lineHeight={1.3}>
              <Text fontSize={12} fontWeight={200}>
                <MiniMarkdown>{i}</MiniMarkdown>
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Collapse>
  );
};
