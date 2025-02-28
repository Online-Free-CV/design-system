// Socials.stories.tsx
import { Socials } from '@components/socials';
import { Meta, StoryObj } from '@storybook/react';

// Defining the metadata for the story
const meta: Meta = {
  title: "DesignSystem/OnlineFreeCV/Socials",
  component: Socials,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
} satisfies Meta<typeof Socials>;

export default meta;

type Story = StoryObj<typeof meta>;
export let TextVariants: Story = {
  args: {
    socialProfiles: [
      { name: "linkedin", url: "https://www.linkedin.com/" },
      { name: "twitter", url: "https://twitter.com/" },
      { name: "youtube", url: "https://www.youtube.com/" }
    ]
  },
};

