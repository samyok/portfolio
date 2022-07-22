import { border, Box, chakra, Heading } from "@chakra-ui/react";

const borderBottom = "1.5px solid black";

export const ResumeHeading = ({ children, ...props }) => (
  <Box borderBottom={borderBottom} display={"flex"} pb={1} my={2}>
    <Heading
      mb={-1.5}
      mr={2}
      fontWeight={600}
      fontSize={32}
      letterSpacing={"-1px"}
      fontFamily={"Lato, Poppins, Inter, sans-serif"}
      {...props}>
      {children}
    </Heading>
    <Box mb={0.5} borderBottom={borderBottom} flexGrow={1} />
  </Box>
);
