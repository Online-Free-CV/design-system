import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./index";
import { tokens } from "@styles/theme.css";

const meta: Meta<typeof Spinner> = {
  title: "DesignSystem/OnlineFreeCV/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the spinner",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    color: {
      control: "color",
      description: "Color of the spinner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: tokens.colors.primary },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "medium",
    color: tokens.colors.primary,
  },
};
