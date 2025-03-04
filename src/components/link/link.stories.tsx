import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@components/link";

// Storybook Metadata
const meta = {
  title: "DesignSystem/OnlineFreeCV/Link",
  component: Link,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
  tags: ["autodocs"],
  argTypes: {
    url: {
      name: "URL",
      control: "text",
      description: "URL for the link",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "https://www.example.com/" },
      },
    },
    children: {
      name: "Children",
      control: "text",
      description: "Content of the link",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "Click me" },
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story for Default Link
export const Default: Story = {
  args: {
    url: "https://www.example.com/",
    children: "Click me",
  },
};
Default.storyName = "Default Link";