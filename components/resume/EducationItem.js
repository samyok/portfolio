import { Box, Button, Collapse, Flex, Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

export const EducationItem = ({ item, selectedTags, isEditing }) => {
  const isSelected = !item.tags || selectedTags.some((tag) => item.tags.includes(tag));
  const [showParens, setShowParams] = useState(true);

  const onClick = () => {
    if (isEditing) setShowParams((pv) => !pv);
  };

  const date = showParens ? item.date : item.date.replace(/\(.*\)/g, "").trim();

  return (
    <Collapse in={isSelected}>
      <Box px={1} py={1}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading as="h3" size="md" fontWeight={500} fontSize={14} fontFamily={"Inter"}>
            {item.name}
          </Heading>
          <Link
            as={"p"}
            variant={"link"}
            _hover={{
              textDecoration: isEditing ? "underline" : "none",
              cursor: isEditing ? "pointer" : "default",
            }}
            onClick={onClick}
            fontWeight={400}
            fontSize={14}>
            {date}
          </Link>
        </Flex>
        <UnorderedList pl={1}>
          {item.info.map((i) => (
            <ListItem key={i} fontWeight={300} fontSize={12}>
              {i}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Collapse>
  );
};
