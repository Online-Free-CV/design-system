import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "@assets/icons/Navbar";
import { IconButton } from "./index";

// Storybook Metadata
const meta = {
  title: "DesignSystem/OnlineFreeCV/IconButton",
  component: IconButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Label for the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Home" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the button",
      table: {
        type: { summary: "function" },
      },
    },
    icon: {
      control: false,
      description: "Icon component for the button",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story for Default IconButton
export const Default: Story = {
  args: {
    label: "Home",
    onClick: () => alert("Home clicked"),
    icon: <Home width={20} height={20} />,
  },
};
Default.storyName = "Default IconButton";