import { Box, Collapse, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const EducationItem = ({ item, selectedTags }) => {
  const isSelected = !item.tags || selectedTags.some((tag) => item.tags.includes(tag));

  return (
    <Collapse in={isSelected}>
      <Box px={1} py={1}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading as="h3" size="md" fontWeight={500} fontSize={16} fontFamily={"Inter"}>
            {item.name}
          </Heading>
          <Text fontWeight={300} fontSize={14}>
            {item.date}
          </Text>
        </Flex>
        <UnorderedList pl={1}>
          {item.info.map((i) => (
            <ListItem key={i} fontSize={14}>
              {i}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Collapse>
  );
};
