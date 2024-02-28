// Link.stories.tsx
import { Link } from '@components/link';
import { Meta, Story } from '@storybook/react';

// Define the metadata for the story
const meta: Meta = {
  title: "OnlineFreeCV/Link",
  component: Link,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
  argTypes: {
    url: {
      name: "url",
    }
  }
};

export default meta;

// Defining the Story object
type StoryType = Story<{ url: string }>;

// Template for Link component story
const Template: StoryType = (args) => <Link {...args}>Click me</Link>;

// Default story for Link component
export const Default = Template.bind({});
Default.args = {
  url: "https://www.example.com/"
};
