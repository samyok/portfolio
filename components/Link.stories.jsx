import { Link, Text } from "@chakra-ui/react";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ text, ...args }) => (
  <Text>
    {Array(2).fill(text).join(" ")}{" "}
    <Link variant={"highlighted"} {...args}>
      {text}
    </Link>{" "}
    {Array(2).fill(text).join(" ")}{" "}
    <Link variant={"highlighted"} {...args}>
      {text}
    </Link>{" "}
    {Array(5).fill(text).join(" ")}
  </Text>
);
export const Primary = Template.bind({});
Primary.args = {
  text: "Samyok Nepal",
  href: "#",
};
