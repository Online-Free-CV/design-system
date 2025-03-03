import { Home } from "@assets/icons/Navbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Title from "./index";

export default {
  title: "DesignSystem/OnlineFreeCV/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);

export const Default = Template.bind({});
Default.args = {
  firstName: "Junaid",
  lastName: "Umer",
};
