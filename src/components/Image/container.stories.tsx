import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@components/container";

// Storybook Metadata
const meta = {
  title: "DesignSystem/OnlineFreeCV/Image",
  component: Container,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "Variant",
      control: "select",
      options: ["wrapper", "flexWrap", "row", "column"],
      table: {
        type: { summary: "wrapper | flexWrap | row | column" },
        defaultValue: { summary: "wrapper" },
      },
    },
    direction: {
      name: "Direction",
      control: "radio",
      options: ["ltr", "rtl"],
      table: {
        type: { summary: "ltr | rtl" },
        defaultValue: { summary: "ltr" },
      },
    },
    justify: {
      name: "Justify",
      control: "select",
      options: ["start", "center", "end", "between", "around"],
      table: {
        type: { summary: "start | center | end | between | around" },
        defaultValue: { summary: "start" },
      },
    },
    align: {
      name: "Align",
      control: "select",
      options: ["start", "center", "end", "stretch"],
      table: {
        type: { summary: "start | center | end | stretch" },
        defaultValue: { summary: "stretch" },
      },
    },
    size: {
      control: "select",
      options: ["full", "half", "auto"],
      description: "Defines how much space children take relative to the parent.",
      table: {
        type: { summary: "full | half | auto" },
        defaultValue: { summary: "auto" },
      },
    },
    gap: {
      control: "select",
      options: ["none", "small", "medium", "large"],
      description: "Sets gap spacing between children.",
      table: {
        type: { summary: "none | small | medium | large" },
        defaultValue: { summary: "none" },
      },
    },
    className: {
      name: "ClassName",
      control: "text",
      description:
        "Custom className for additional styling (e.g., `vanilla-extract/css`).",
      table: {
        category: "Customization",
      },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story for Default Wrapper
export const Default: Story = {
  args: {
    variant: "wrapper",
    direction: "ltr",
    justify: "start",
    align: "stretch",
    size: "auto",
    gap: "none",
    children: (
      <>
        <div style={{ padding: "10px", background: "#e0e0e0", flex:1 }}>Item 1</div>
        <div style={{ padding: "10px", background: "#bdbdbd", flex:2 }}>Item 2</div>
      </>
    ),
  },
};
Default.storyName = "Default Container";

// Story for Row Layout
export const RowLayout: Story = {
  args: {
    variant: "row",
    direction: "ltr",
    justify: "center",
    align: "center",
    size: "auto",
    gap: "none",
    children: (
      <>
        <div style={{ padding: "10px", background: "#ff8a80" }}>My Name is Liaqat</div>
        <div style={{ padding: "10px", background: "#ff5252" }}>I am a software Engineer</div>
      </>
    ),
  },
};
RowLayout.storyName = "Row Layout";

// Story for Column Layout
export const ColumnLayout: Story = {
  args: {
    variant: "column",
    direction: "rtl",
    justify: "end",
    align: "center",
    size: "auto",
    gap: "none",
    children: (
      <>
        <div style={{ padding: "10px", background: "#80deea" }}>میرا نام لیاقت ہے۔</div>
        <div style={{ padding: "10px", background: "#4dd0e1" }}>میں ایک سافٹ ویئر انجینئر ہوں۔</div>
      </>
    ),
  },
};
ColumnLayout.storyName = "Column Layout (RTL)";

// Story for Justify Content Examples
export const JustifyVariants: Story = {
  args: {
    variant: "row",
    direction: "ltr",
    justify: "between",
    align: "center",
    size: "auto",
    gap: "none",
    children: (
      <>
        <div style={{ padding: "10px", background: "#b2ff59", flex:1 }}>Start</div>
        <div style={{ padding: "10px", background: "#76ff03",flex: 3 }}>End</div>
      </>
    ),
  },
};
JustifyVariants.storyName = "Justify Variants";
