import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

export const ExperienceItem = ({ item }) => {
  return (
    <Box p={1}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"flex-end"}>
          <Heading as="h3" size="md" fontWeight={700} pr={2}>
            {item.location}
            {item.title && `, ${item.title}`}
          </Heading>
          {item.url && (
            <>
              (
              <Link
                href={item.href}
                target={"_blank"}
                fontWeight={300}
                fontSize={"md"}
                fontFamily={"monospace"}>
                {item.url}
              </Link>
              )
            </>
          )}
        </Flex>
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
