import { Home } from "@assets/icons/Navbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./index";

export default {
  title: "DesignSystem/OnlineFreeCV/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Home",
  onClick: () => alert("Home clicked"),
  icon: <Home width={20} height={20} />,
};
