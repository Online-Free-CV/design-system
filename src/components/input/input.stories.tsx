// Input.stories.tsx
import { Input } from "@components/input";
import { Meta, StoryObj } from '@storybook/react';
import { JSX } from 'react/jsx-runtime';
import { InputProps } from './input.interface';

// Defining the metadata for the story
const meta: Meta = {
  title: "DesignSystem/OnlineFreeCV/Input",
  component: Input,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
  tags: ["autodocs"], // Generate Autodocs entry
  argTypes: {
    // Define argTypes for variant and className
    type: {
      name: "type",
      control: "select",
      type: { name: "string", required: true },
      options: ["text", "password", "email", "number"], // Example options, customize as needed
      table: {
        type: {
          summary: "Specifies the type of input",
          detail: "text | password | email | number",
        },
        defaultValue: { summary: "text" }, // Default value
      },
    },
    className: {
      name: "className",
      control: "text",
      description: "Custom class name for styling",
      table: {
        category: "customization",
      },
    },
  },
};

export default meta;

// Defining the Story object
type Story = StoryObj<typeof meta>;

// Default story for Input component
export const Default: Story = (args: JSX.IntrinsicAttributes & InputProps) => <Input {...args} />;
Default.args = {
  type: 'text',
  placeholder: 'Enter text...',
};
