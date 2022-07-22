import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const AwardItem = ({ item }) => {
  return (
    <Text size="md" pl={1}>
      {item.name}
    </Text>
  );
};
