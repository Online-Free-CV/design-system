import {
  Add,
  Facebook,
  Github,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "@assets/icons/socials";
import { Accordion } from "@components/accordion";
import { Button } from "@components/button";
import { Link } from "@components/link";
import {
  socialItemStyle,
  socialsStyle,
  transparentSocialItemStyle,
} from "@components/socials/socials.css";
import { FormikValues, useFormikContext } from "formik";
import { useState } from "react";
import { SocialForm } from "./socialForm";
import { SocialItemProps } from "./socials.interface";

// Common SocialItem component used by both versions
export const SocialItem: React.FC<SocialItemProps> = ({ name, url }) => {
  const socialIcons: { [key: string]: JSX.Element } = {
    facebook: <Facebook />,
    github: <Github />,
    instagram: <Instagram />,
    linkedin: <LinkedIn />,
    twitter: <Twitter />,
    youtube: <Youtube />,
  };

  const Icon = socialIcons[name];

  return (
    <Link
      className={socialItemStyle}
      url={url}
    >
      {Icon}
    </Link>
  );
};

// Display-only version that doesn't require Formik context
export const SocialsDisplay = ({
  socialProfiles,
}: {
  socialProfiles: SocialItemProps[];
}) => {
  return (
    <div className={socialsStyle}>
      {socialProfiles.map(
        ({ name, url }, index) =>
          url && (
            <SocialItem
              key={index}
              url={url}
              name={name}
            />
          )
      )}
    </div>
  );
};

// Full editable version that works with Formik
export const Socials = ({ fieldName }: { fieldName: string }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const { values } = useFormikContext<FormikValues>();

  // Get social profiles from the Formik context using the provided field name
  const profiles: SocialItemProps[] = values[fieldName] || [];

  const toggleAccordion = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    e.stopPropagation(); // Stop event propagation
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <div className={socialsStyle}>
        <SocialsDisplay socialProfiles={profiles} />
        <Button
          onClick={toggleAccordion}
          label=""
          type="button"
          className={transparentSocialItemStyle}
        >
          <Add />
        </Button>
      </div>

      <Accordion isOpen={isAccordionOpen}>
        <SocialForm fieldName={fieldName} />
      </Accordion>
    </div>
  );
};
