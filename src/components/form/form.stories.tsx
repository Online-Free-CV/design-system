import { EditableSection, Section } from "@components/section";
import { SkillsSection } from "../skills/skills-section";
import { ColorPickerDropdown } from "../colorPicker";

import type { Meta, StoryObj } from "@storybook/react";
import { Appform, useFormikContext, Yup } from "./index";

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

const FormSections = () => {
  const { values } = useFormikContext<any>();

  return (
    <>
      <Section title="Theme Color" themeColor={values.themeColor}>
        <ColorPickerDropdown name="themeColor" />
      </Section>

      <Section title="Technical Skills" themeColor={values.themeColor}>
        <SkillsSection name="skills" barColor="red" />
      </Section>
    </>
  );
};

// Story for Default Form
export const Default: Story = {
  args: {
    initialValues: {
      // Add appropriate fields here based on MyFormValues type
      experiences: [
        {
          title: "Principal Software Consultant",
          company: "System Limited",
          skills: ["JavaScript", "React", "Node.js"],
          description: "Leading the development of scalable web applications.",
          startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
          endDate: "",
          logoUrl:
            "https://media.licdn.com/dms/image/v2/C510BAQHVR9ucUJs0ig/company-logo_200_200/company-logo_200_200/0/1630602986392/systems_limited_logo?e=1754524800&v=beta&t=Mv9woSvgjV0RU2pD_aF8eK0Wtrt73SbTvS1alSlQ5Fs",
          isPresent: true,
          isEdit: false,
          id: "1",
        },
      ],
      educations: [
        {
          title: "Bachelor of Computer Software Engineering",
          university: "FURC",
          logoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyURAG3gkgfUr1UiqfBvfJoq1gKrkMIjd5JmVwchyYOCZ7ofhZNa2eJFwXoj-lcXau8tA&usqp=CAU",
          startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
          endDate: "",
          description: "Studied software engineering principles and practices.",
          isPresent: true,
          isEdit: true,
          id: "1",
        },
      ],
      projects: [
        {
          title: "Web Application Development",
          description:
            "Developed a scalable web application using React and Node.js.",
          startDate: new Date().toISOString().split("-").slice(0, 2).join("-"),
          endDate: "",
          isPresent: true,
          logoUrl:
            "https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg",
          isEdit: true,
          id: "1",
        },
      ],
      references: [
        {
          title: "",
          subtitle: "",
          location: "",
          email: "",
          phone: "",
          website: "",
          logoUrl: "",
          isEdit: true,
        },
      ],
      skills: [
        {
          name: "JavaScript",
          level: 80,
          years: 5,
        },
      ],
      themeColor: "OnlineFreeCV Blue",
      languages: [
        {
          id: "",
          title: "",
          tags: [],
          sectionName: "simple",
          isEdit: true,
        },
      ],
      hobbies: [
        {
          id: "",
          title: "",
          description: "",
          sectionName: "simple",
          isEdit: true,
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
        <FormSections />

        <EditableSection
          sectionTitle="Experience"
          name="experiences"
          fields={[
            { key: "title", label: "Job Title", type: "text" },
            { key: "company", label: "Company", type: "text" },
            { key: "description", label: "Description", type: "textarea" },
            { key: "startDate", label: "Start Date", type: "date" },
            { key: "endDate", label: "End Date", type: "date" },
            { key: "tags", label: "Skills", type: "tags" },
            { key: "logoUrl", label: "Company Logo URL", type: "text" },
            {
              key: "level",
              label: "Seniority Level",
              type: "select",
              options: [
                { label: "Intern", value: "intern" },
                { label: "Junior", value: "junior" },
                { label: "Mid", value: "mid" },
                { label: "Senior", value: "senior" },
                { label: "Lead", value: "lead" },
              ],
            },
          ]}
          defaultItem={{
            title: "",
            company: "",
            description: "",
            startDate: "",
            endDate: "",
            isPresent: true,
            isEdit: true,
            tags: [],
            id: "",
            logoUrl: "",
            level: "junior",
          }}
        />
        <EditableSection
          sectionTitle="Education"
          name="educations"
          fields={[
            { key: "title", label: "Degree Title", type: "text" },
            { key: "university", label: "Institute", type: "text" },
            { key: "location", label: "Location", type: "text" },
            { key: "description", label: "Description", type: "textarea" },
            { key: "startDate", label: "Start Date", type: "date" },
            { key: "endDate", label: "End Date", type: "date" },
            { key: "tags", label: "Tags", type: "tags" },
            { key: "logoUrl", label: "Institute Logo URL", type: "text" },
          ]}
          defaultItem={{
            title: "",
            university: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            tags: [],
            logoUrl: "",
          }}
        />

        <EditableSection
          sectionTitle="Projects"
          name="projects"
          fields={[
            { key: "title", label: "Role", type: "text" },
            { key: "description", label: "Description", type: "textarea" },
            { key: "startDate", label: "Start Date", type: "date" },
            { key: "endDate", label: "End Date", type: "date" },
            { key: "skills", label: "Skills", type: "tags" },
            { key: "logoUrl", label: "Project Logo URL", type: "text" },
          ]}
          defaultItem={{
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            skills: [],
            logoUrl: "",
          }}
        />

        <EditableSection
          sectionTitle="References"
          itemDisplayDirection="row"
          name="references"
          fields={[
            { key: "title", label: "Name", type: "text" },
            { key: "location", label: "Designation", type: "text" },
            { key: "subtitle", label: "Company", type: "text" },
            { key: "email", label: "Email", type: "text" },
            { key: "phone", label: "Phone", type: "text" },
            { key: "website", label: "Website", type: "text" },
            { key: "logoUrl", label: "Profile Picture URL", type: "text" },
          ]}
          defaultItem={{
            title: "",
            subtitle: "",
            location: "",
            email: "",
            phone: "",
            website: "",
            logoUrl: "",
          }}
        />
        <EditableSection
          sectionTitle="Languages"
          name="languages"
          defaultItem={{
            id: "",
            title: "",
            tags: [],
            sectionName: "simple",
            isEdit: true,
          }}
          fields={[
            { key: "title", label: "Language", type: "text" },
            {
              key: "tags",
              label: "Proficiency",
              type: "select",
              options: [
                { label: "Basic", value: "Basic" },
                { label: "Conversational", value: "Conversational" },
                { label: "Fluent", value: "Fluent" },
                { label: "Native", value: "Native" },
              ],
            },
          ]}
        />
        <EditableSection
          sectionTitle="Hobbies"
          itemDisplayDirection="row"
          name="hobbies"
          defaultItem={{
            id: "",
            title: "",
            description: "",
            sectionName: "simple",
            isEdit: true,
          }}
          fields={[
            { key: "title", label: "Hobby", type: "text" },
            { key: "description", label: "Details", type: "textarea" },
          ]}
        />
      </>
    ),
  },
};

Default.storyName = "Experience Form";
