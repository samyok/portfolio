import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Flex,
  Heading,
  Hide,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function getTagsFromData(data) {
  const tags = new Set();
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const elements = data[key];
      if (Array.isArray(elements)) {
        for (const element of elements) {
          if (element.tags) {
            for (const tag of element.tags) {
              tags.add(tag);
            }
          }
        }
      }
    }
  }
  return Array.from(tags);
}

export const ResumeEditor = (props) => {
  // create a list of every tag in the data

  if (!props) return;
  const { data, isEditing, onOpen, onClose, tab, tags } = props;
  const [selectedTags, setSelectedTags] = tags || [[], () => {}];

  const allTags = getTagsFromData(data);
  let selectedTagsArr = Array.from(selectedTags || []);

  console.log(allTags);

  const toggleTag = (tag) => () => {
    setSelectedTags((pv) => {
      let tagSet = new Set(pv);
      if (tagSet.has(tag)) tagSet.delete(tag);
      else tagSet.add(tag);
      return Array.from(tagSet);
    });
  };

  const onPrint = () => {
    setTimeout(() => window.print(), 0);
  };

  return (
    <Hide breakpoint={"print"}>
      <Collapse in={isEditing} animateOpacity>
        <Box p={4} mt="4" bg="yellow.50" rounded="md">
          <Heading size={"sm"} my={2}>
            Print this web page to download my resume!
          </Heading>

          <Text fontSize={"sm"} mt={2}>
            My resume is built in React -- it&apos;s compiled from a yaml file and turned into something
            easily editable.
          </Text>

          <Text fontSize={"sm"} mt={2}>
            Parts of the resume (like my email, phone number, etc) can also be clicked to toggle between
            different values.
          </Text>

          <HStack spacing={4} alignItems={"center"} my={4}>
            <Heading size={"sm"} alignSelf={"flex-start"}>
              Tags:
            </Heading>
            <CheckboxGroup colorScheme="orange" value={selectedTagsArr} size={"sm"}>
              <Stack spacing={[1, 5]} direction={["column", "column", "row"]}>
                {allTags.map((tag) => (
                  <Checkbox key={tag} value={tag} onChange={toggleTag(tag)}>
                    {tag}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </HStack>
          <Text fontSize={"xs"}>
            This feature is largely for my own use — I like to prune my resume down differently for
            math/cs/academic jobs.
          </Text>
          <HStack spacing={2} mt={4}>
            <Button colorScheme={"green"} variant={"outline"} onClick={onPrint}>
              Download
            </Button>
            <Button colorScheme={"green"} variant={"solid"} onClick={onClose}>
              Save
            </Button>
          </HStack>
        </Box>
      </Collapse>
      <Flex justifyContent={"flex-start"} mb={isEditing ? 0 : -20}>
        {!isEditing && (
          <HStack>
            <Button colorScheme={"green"} variant={"outline"} onClick={onPrint}>
              Download PDF
            </Button>
            <Button colorScheme={"green"} variant={"ghost"} onClick={onOpen}>
              Edit
            </Button>
          </HStack>
        )}
      </Flex>
    </Hide>
  );
};
