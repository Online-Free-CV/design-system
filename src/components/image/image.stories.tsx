import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomImage from "./index";

export default {
  title: "DesignSystem/OnlineFreeCV/Image",
  component: CustomImage,
} as ComponentMeta<typeof CustomImage>;

const Template: ComponentStory<typeof CustomImage> = (args) => (
  <CustomImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  alt: "User Profile Picture",
  image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
};
