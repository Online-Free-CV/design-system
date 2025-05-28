import React from "react";
import {
  formGroupStyle,
  formStyle,
  socialIconsContainer,
  socialInputRow,
  socialIcon,
  urlInput,
} from "./socials.css";
import { IconTypes } from "./socials.type";
import {
  Facebook,
  Github,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "@assets/icons/socials";
import { useFormikContext, FormikValues } from "formik";
import { EditableField } from "@components/form/EditableField";
import { SocialItemProps } from "./socials.interface";

interface SocialFormProps {
  fieldName: string;
}

export const SocialForm: React.FC<SocialFormProps> = ({ fieldName }) => {
  const { values, setFieldValue } = useFormikContext<FormikValues>();

  // Get social profiles from formik context
  const profiles = values[fieldName] || [];

  // Social platforms and their icons
  const socialIcons: { [key in IconTypes]: JSX.Element } = {
    facebook: <Facebook />,
    github: <Github />,
    instagram: <Instagram />,
    linkedin: <LinkedIn />,
    twitter: <Twitter />,
    youtube: <Youtube />,
  };

  // Available social platforms
  const socialPlatforms: IconTypes[] = [
    "facebook",
    "github",
    "instagram",
    "linkedin",
    "twitter",
    "youtube",
  ];

  // Handle URL input change
  const handleUrlChange = (platform: IconTypes, url: string) => {
    // Find if this platform already exists in profiles
    const existingIndex = profiles.findIndex(
      (p: SocialItemProps) => p.name === platform
    );

    if (existingIndex >= 0) {
      // Update existing profile
      const updatedProfiles = [...profiles];
      updatedProfiles[existingIndex] = {
        ...updatedProfiles[existingIndex],
        url,
      };
      setFieldValue(fieldName, updatedProfiles);
    } else {
      // Add new profile
      setFieldValue(fieldName, [...profiles, { name: platform, url }]);
    }
  };

  return (
    <div className={formStyle}>
      <div className={socialIconsContainer}>
        {socialPlatforms.map((platform) => {
          // Find existing profile or create one
          let profileIndex = profiles.findIndex(
            (p: SocialItemProps) => p.name === platform
          );

          if (profileIndex === -1) {
            // Add this platform to profiles if it doesn't exist
            handleUrlChange(platform, "");
            // Get the new index after adding
            profileIndex = profiles.length;
          }

          return (
            <div
              key={platform}
              className={formGroupStyle}
            >
              <div className={socialInputRow}>
                <div className={socialIcon}>{socialIcons[platform]}</div>
                <div className={urlInput}>
                  <EditableField name={`${fieldName}[${profileIndex}].url`} active={true} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
