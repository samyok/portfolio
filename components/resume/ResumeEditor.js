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
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { isFirefox } from "react-device-detect";

const DateString = new Date().toISOString().split("T")[0];
const RESUME_PDF_LINK =
  "https://cdn.yok.dev/api/SamyokNepalResume.pdf?sha=" +
  (process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ?? DateString);

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

const ResumeEditor = (props) => {
  // create a list of every tag in the data

  const canPrint = !isFirefox;

  if (!props) return;
  const { data, isEditing, onOpen, onClose, tags } = props;
  const [selectedTags, setSelectedTags] = tags || [[], () => {}];

  const allTags = getTagsFromData(data);
  let selectedTagsArr = Array.from(selectedTags || []);

  const toggleTag = (tag) => () => {
    setSelectedTags((pv) => {
      let tagSet = new Set(pv);
      if (tagSet.has(tag)) tagSet.delete(tag);
      else tagSet.add(tag);
      return Array.from(tagSet);
    });
  };

  const onPrint = () => {
    if (canPrint) setTimeout(() => window.print(), 0);
    else window.open(RESUME_PDF_LINK, "_blank");
  };

  return (
    <Hide breakpoint={"print"}>
      <Collapse in={isEditing} animateOpacity>
        <Box p={4} mt="4" bg="yellow.50" rounded="md">
          <Flex alignItems={"center"} my={2}>
            <Heading size={"sm"} textDecoration={canPrint ? "" : "line-through"}>
              Print this web page to download my resume!
            </Heading>
            {!canPrint && (
              <Text fontSize={"xs"} ml={2} textDecor={"none"}>
                This browser does not support this feature.{" "}
                <Link
                  color={"blue.400"}
                  isExternal
                  href={"https://bugzilla.mozilla.org/show_bug.cgi?id=774398"}>
                  More info
                </Link>
              </Text>
            )}
          </Flex>
          <Text fontSize={"sm"}>
            Or, view{" "}
            <Link color={"blue.400"} isExternal href={RESUME_PDF_LINK}>
              this already-generated one
            </Link>
            .
          </Text>
          <Text fontSize={"sm"} mt={4}>
            My resume is built in React — it&apos;s compiled from a yaml file and rendered in an easily
            editable format.
          </Text>

          <Text fontSize={"sm"} mt={1}>
            Parts of the resume (like my email, phone number, etc) can also be clicked to toggle between
            different values.
          </Text>

          <HStack spacing={4} alignItems={"center"} my={2}>
            <Heading size={"sm"} alignSelf={"flex-start"}>
              Tags:
            </Heading>
            <CheckboxGroup colorScheme="blue" value={selectedTagsArr} size={"sm"}>
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
            <Button size={"sm"} colorScheme={"blue"} variant={"outline"} onClick={onPrint}>
              Download
            </Button>
            <Button size={"sm"} colorScheme={"blue"} variant={"solid"} onClick={onClose}>
              Save
            </Button>
          </HStack>
        </Box>
      </Collapse>
      <Flex justifyContent={"flex-start"} mb={isEditing ? 0 : [0, 0, -20]}>
        {!isEditing && (
          <HStack>
            <Button size={"sm"} colorScheme={"blue"} variant={"outline"} onClick={onPrint}>
              Download PDF
            </Button>
            <Button size={"sm"} colorScheme={"blue"} variant={"ghost"} onClick={onOpen}>
              Edit
            </Button>
          </HStack>
        )}
      </Flex>
    </Hide>
  );
};

export default ResumeEditor;
