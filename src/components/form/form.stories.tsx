import {
    EditableSection
} from "@components/section";
import type { Meta, StoryObj } from "@storybook/react";
import { Appform, Yup } from "./index";

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
  skills: Yup.array().of(Yup.string()).min(1, "At least one skill required"),
  description: Yup.string().required("Description is required"),
});

const educationItemSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    university: Yup.string().required("University is required"),
    startDate: Yup.string().required("Start Date is required"),
    isPresent: Yup.boolean(), // checkbox, no need to require
    endDate: Yup.string().when("isPresent", ([isPresent], schema) =>
      isPresent === false
        ? schema.required("End Date is required")
        : schema.notRequired()
    ),
    tags: Yup.array().of(Yup.string()).min(1, "At least one tag required"),
    description: Yup.string().required("Description is required"),
  });

  const projectItemSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    startDate: Yup.string().required("Start Date is required"),
    isPresent: Yup.boolean(), // checkbox, no need to require
    endDate: Yup.string().when("isPresent", ([isPresent], schema) =>
      isPresent === false
        ? schema.required("End Date is required")
        : schema.notRequired()
    ),
    skills: Yup.array().of(Yup.string()).min(1, "At least one skill required"),
  });

// Define the main form validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  experiences: Yup.array().of(experienceItemSchema),
  educations: Yup.array().of(educationItemSchema),
  projects: Yup.array().of(projectItemSchema),
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
      experiences: [
        {
          title: "",
          company: "",
          startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
          endDate: "",
          description: "",
          isPresent: true,
          isEdit: true,
          id: "1",
        },
      ],
      educations: [
        {
          title: "",
          university: "",
          startDate:new Date().toISOString().split("-").slice(0, 2).join("-"),
          endDate: "",
          description: "",
          isPresent: true,
          isEdit: true,
          id: "1",
        },
      ],
      projects: [
        {
          title: "",
          description: "",
          startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
          endDate: "",
          isPresent: true,
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
        <>
      <EditableSection
        sectionTitle="Experience"
        name="experiences"
        fields={[
          { key: "title", label: "Job Title", type: "text" },
          { key: "company", label: "Company", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "startDate", label: "Start Date", type: "date" },
          { key: "endDate", label: "End Date", type: "date" },
          { key: "skills", label: "Skills", type: "tags" },
        ]}
        defaultItem={{
          title: "",
          company: "",
          description: "",
          startDate: "",
          endDate: "",
          isPresent: true,
          isEdit: true,
          skills: [],
          id: "",
        }}
      />
       <EditableSection
        sectionTitle="Education"
        name="educations"
        fields={[
          { key: "title", label: "Job Title", type: "text" },
          { key: "university", label: "University", type: "text" },
          { key: "location", label: "Location", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "startDate", label: "Start Date", type: "date" },
          { key: "endDate", label: "End Date", type: "date" },
          { key: "tags", label: "Tags", type: "tags" },
        ]}
        defaultItem={ {
            title: '',
            university: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
            tags: [],
          }}
      />

<EditableSection
        sectionTitle="Projects"
        name="projects"
        fields={[
          { key: "title", label: "Job Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "startDate", label: "Start Date", type: "date" },
          { key: "endDate", label: "End Date", type: "date" },
          { key: "skills", label: "Skills", type: "tags" },
        ]}
        defaultItem={ {
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            skills: [],
          }}
      />
</>
    ),
  },
};

Default.storyName = "Experience Form";


