import { Box, Collapse, Flex, Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const ExperienceItem = ({ item, selectedTags }) => {
  const isSelected = !item.tags || selectedTags.some((tag) => item.tags.includes(tag));

  const Parens = () => {
    if (item.href)
      return (
        <Text fontSize={12} fontWeight={300} p={0} m={0} as={"span"} display={"inline-block"} pl={1}>
          (
          <Link href={item.href} target={"_blank"}>
            {item.url}
          </Link>
          )
        </Text>
      );
    else if (item.url || item.parens) {
    }
  };

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
            {item.location}
            {item.title && `, ${item.title}`}{" "}
            {item.url && (
              <Text fontSize={12} fontWeight={300} p={0} m={0} as={"span"} display={"inline-block"}>
                (
                <Link href={item.href} target={"_blank"}>
                  {item.url}
                </Link>
                )
              </Text>
            )}
          </Heading>
          <Text fontWeight={400} fontSize={14}>
            {item.date}
          </Text>
        </Flex>
        <UnorderedList pl={1}>
          {item.info?.map((i) => (
            <ListItem key={i} lineHeight={1.3}>
              <Text fontSize={12} fontWeight={300}>
                {i}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Collapse>
  );
};
