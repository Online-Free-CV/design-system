import type { Meta, StoryObj } from "@storybook/react";
import { Appform, EditableField, Yup } from "./index";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
  });

// Storybook Metadata
const meta = {
    title: "DesignSystem/OnlineFreeCV/Form",
    component: Appform,
    parameters: {},
    tags: ["autodocs"],
    argTypes: {
        onSubmit: {
            action: "submitted",
            description: "Submit handler for the form",
            table: {
                type: { summary: "function" },
            },
        },
        children: {
            control: false,
            description: "Form content",
            table: {
                type: { summary: "ReactNode" },
            },
        },
    },
} satisfies Meta<typeof Appform>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story for Default Form
export const Default: Story = {
    args: {
        initialValues: {
            // Add appropriate fields here based on MyFormValues type
            firstName: "", // Replace with actual field names and values
        },
        onSubmit: (values, actions) => {
            alert(`Form submitted: ${JSON.stringify(values)}`);
            actions.setSubmitting(false); // Example action
        },
        validationSchema: validationSchema,
        children: (
            <div>
                 <EditableField name="firstName"/>
            </div>
        ),
    },
};
Default.storyName = "Default Form";