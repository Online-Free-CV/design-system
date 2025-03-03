import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@components/text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DesignSystem/OnlineFreeCV/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      name: "variant",
      control: "select",
      type: { name: "string", required: true },
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body1",
        "body2",
        "body3",
      ],
      table: {
        type: {
          summary: "Has 10 variants: 7 for headings, 3 for body text",
          detail:
            "display | h1 | h2 | h3 | h4 | h5 | h6 | body1 | body2 | body3",
        },
        defaultValue: { summary: "body1" },
      },
    },

    className: {
      name: "className",
      control: "text",
      description:
        "Classname that can be generated using `vanilla-extract/css` or `vanilla-extract/recipe` with the help of `classnames` package.",
      table: {
        category: "customization",
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextVariants: Story = {
  args: {
    variant: 'h1',
    children: "This is Heading 1"
  },
};
TextVariants.name = "H1";