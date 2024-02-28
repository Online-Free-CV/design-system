import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "@components/container";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "OnlineFreeCV/Container",
  component: Container,
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
        "wrapper",
        "flexWrap",
        "row",
        "column"
      ],
      table: {
        type: {
          summary: "Has 4 variants",
          detail:
            "wrapper | flexWrap | row | column",
        },
        defaultValue: { summary: "wrapper" },
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
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export let ContainerVariants: Story = {
  args: {
    variant: 'wrapper',
    children: <><div>div 1</div><div>div 2</div></>
  },
};
ContainerVariants.name = "H1";