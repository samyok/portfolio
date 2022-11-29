import { Box } from "@chakra-ui/react";
import HighlightedHeader from "./HighlightedHeader";

export default {
  title: "Hero/HighlightedHeader",
  component: HighlightedHeader,
  argTypes: {},
};

const Template = (args) => (
  <Box px={[0, 50]} py={10}>
    <HighlightedHeader {...args} />
  </Box>
);
export const Primary = Template.bind({});
