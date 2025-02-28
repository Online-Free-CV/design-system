import { Home } from "@assets/icons/Navbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from "./index";

export default {
  title: "DesignSystem/OnlineFreeCV/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
);

export const Default = Template.bind({});
Default.args = {
  alt: "User Profile Picture",
  image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
};
