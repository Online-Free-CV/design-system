import type { Meta, StoryObj } from "@storybook/react";
import { Appform, EditableField, Yup } from "./index";
import {
  EditableSection,
  EditableItem,
  FieldConfig,
  Section,
} from "@components/section";

const experienceItemSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  company: Yup.string().required("Company is required"),
  startDate: Yup.string().required("Start Date is required"),
  isPresent: Yup.boolean(), // checkbox, no need to require
  endDate: Yup.string().when("isPresent", ([isPresent], schema) =>
    isPresent === false
      ? schema.required("End Date is required")
      : schema.notRequired()
  ),
  description: Yup.string().required("Description is required"),
});

// Define the main form validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  experience: Yup.array().of(experienceItemSchema),
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

const projectsFields: FieldConfig<EditableItem>[] = [
  { key: "title", label: "Project Name", type: "text" },
  { key: "subtitle", label: "Role", type: "text" },
  { key: "startDate", label: "Start Date", type: "date" },
  { key: "endDate", label: "End Date", type: "date" },
  { key: "description", label: "Summary", type: "textarea" },
];

// Story for Default Form
export const Default: Story = {
  args: {
    initialValues: {
      // Add appropriate fields here based on MyFormValues type
      firstName: "",
      experience: [
        {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          isPresent: false,
          isEdit: true,
          id: "1",
        },
      ],
    },
    onSubmit: (values, actions) => {
      alert(`Form submitted: ${JSON.stringify(values)}`);
      actions.setSubmitting(false); // Example action
    },
    validationSchema: validationSchema,
    children: (
      <EditableSection
        sectionTitle="Experience"
        name="experience"
        fields={[
          { key: "title", label: "Job Title", type: "text" },
          { key: "company", label: "Company", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "startDate", label: "Start Date", type: "date" },
          { key: "endDate", label: "End Date", type: "date" },
        ]}
        defaultItem={{
          title: "",
          company: "",
          description: "",
          startDate: "",
          endDate: "",
          isPresent: true,
          isEdit: true,
          id: "",
        }}
      />
    ),
  },
};
Default.storyName = "Default Form";
