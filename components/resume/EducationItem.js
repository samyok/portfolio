import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const EducationItem = ({ item }) => {
  return (
    <Box p={1}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading as="h3" size="md" fontWeight={700}>
          {item.name}
        </Heading>
        <Text>{item.date}</Text>
      </Flex>
      <Box pl={2}>
        {item.info.map((i) => (
          <Text key={i}>{i}</Text>
        ))}
      </Box>
    </Box>
  );
};
