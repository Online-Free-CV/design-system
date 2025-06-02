// stories/FormikSkillsSection.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Formik, Form } from "formik";
import { FormikSkillsSection } from "../components/FormikSkillsSection";

const meta: Meta<typeof FormikSkillsSection> = {
  title: "Resume/FormikSkillsSection",
  component: FormikSkillsSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormikSkillsSection>;

export const Default: Story = {
  render: () => (
    <Formik
      initialValues={{ skills: [] }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormikSkillsSection name="skills" />
      </Form>
    </Formik>
  ),
};
