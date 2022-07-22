import { border, Box, chakra, Heading, Link, Text } from "@chakra-ui/react";

const borderBottom = "1.5px solid black";

export const ResumeTop = ({ children, ...props }) => (
  <Box textAlign={"center"}>
    <Heading>Samyok Nepal</Heading>
    <Text fontSize={"md"}>
      <Link href={"mailto:nepal017@umn.edu"}>nepal017@umn.edu</Link>
    </Text>
    <Text fontSize={"md"}>
      <Link href={"https://yok.dev"}>yok.dev</Link>
    </Text>
    <Text fontSize={"md"}>
      <Link href={"https://github.com/samyok"}>github.com/samyok</Link>
    </Text>
    <Text fontSize={"md"}>
      <Link href={"https://linkedin.com/in/samyok"}>linkedin.com/in/samyok</Link>
    </Text>
  </Box>
);
