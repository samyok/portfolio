import { Box, Collapse, Flex, Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const ExperienceItem = ({ item, selectedTags }) => {
  const isSelected = !item.tags || selectedTags.some((tag) => item.tags.includes(tag));

  return (
    <Collapse in={isSelected}>
      <Box p={1}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex alignItems={"flex-end"}>
            <Heading as="h3" size="md" fontWeight={500} fontSize={16} fontFamily={"Inter"} pr={1}>
              {item.location}
              {item.title && `, ${item.title}`}
            </Heading>
            {item.url && (
              <Text fontSize={14} fontWeight={300} p={0} m={0}>
                (
                <Link href={item.href} target={"_blank"}>
                  {item.url}
                </Link>
                )
              </Text>
            )}
          </Flex>
          <Text fontWeight={400} fontSize={14}>
            {item.date}
          </Text>
        </Flex>
        <UnorderedList pl={1}>
          {item.info.map((i) => (
            <ListItem key={i} lineHeight={1.3}>
              <Text fontSize={14} fontWeight={300}>
                {i}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Collapse>
  );
};
