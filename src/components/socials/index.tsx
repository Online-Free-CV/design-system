import {
  Facebook,
  Github,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "@assets/icons/socials";
import { socialItemStyle, socialsStyle } from "@components/socials/socials.css";
import { SocialItemProps, SocialsProps } from "./socials.interface";
import { Link } from "@components/link";

export const SocialItem: React.FC<SocialItemProps> = ({ name, url }) => {
  console.log("name",url)
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
    <Link className={socialItemStyle} url={url}>
      {Icon}
    </Link>
  );
};

export const Socials = ({ socialProfiles }: SocialsProps) => (
  <div className={socialsStyle}>
    {socialProfiles.map(({ name, url }, index) => (
      <SocialItem key={index} url={url} name={name} />
    ))}
  </div>
);
