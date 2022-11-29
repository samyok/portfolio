import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    currentPage: {
      control: {
        type: "select",
        options: ["/", "/projects", "/resume", "/contact"],
      },
    },
  },
};

const Template = (args) => <Navbar {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  currentPage: "/",
};
