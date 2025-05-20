// Socials.stories.tsx
import { Socials, SocialsDisplay } from "@components/socials";
import { Meta, StoryObj } from "@storybook/react";
import { withFormik } from "@hoc/withFormik";
import React from "react";
import * as Yup from "yup";
import { IconTypes } from "./socials.type";
import { SocialItemProps, SocialsDisplayProps } from "./socials.interface";

// Defining the metadata for the stories
const meta: Meta = {
  title: "DesignSystem/OnlineFreeCV/Socials",
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
} satisfies Meta<typeof Socials>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample social profiles for both stories
const sampleProfiles: SocialItemProps[] = [
  { name: "linkedin" as IconTypes, url: "https://www.linkedin.com/" },
  { name: "twitter" as IconTypes, url: "https://twitter.com/" },
  { name: "youtube" as IconTypes, url: "" },
  { name: "facebook" as IconTypes, url: "https://www.facebook.com/" },
  { name: "github" as IconTypes, url: "" },
  { name: "instagram" as IconTypes, url: "" },
];

// Display-only version story
export const Display: Story = {
  render: () => <SocialsDisplay socialProfiles={sampleProfiles} />,
};

// Create a wrapper component using withFormik HOC for the editable version
const SocialsWithFormik = (args: SocialsDisplayProps) => {
  const initialValues = {
    socialProfiles: args.socialProfiles || [],
  };

  // Create validation schema using Yup
  const validationSchema = Yup.object({
    socialProfiles: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        url: Yup.string().optional(),
      })
    ),
  });

  // Define the base component that will receive formik values
  const SocialsFormComponent: React.FC<{
    values: typeof initialValues;
  }> = () => <Socials fieldName="socialProfiles" />;

  // Create enhanced component with withFormik
  const EnhancedForm = withFormik<typeof initialValues>(SocialsFormComponent);

  return (
    <EnhancedForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: typeof initialValues) => {
        alert(`Form submitted: ${JSON.stringify(values, null, 2)}`);
        console.log("Form values:", values);
        return Promise.resolve();
      }}
    />
  );
};

export const Editable: Story = {
  render: () => <SocialsWithFormik socialProfiles={sampleProfiles} />,
};
