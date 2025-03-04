import { IconTypes } from './socials.type';
export interface SocialsProps {
    socialProfiles: SocialItemProps[];
}
export interface SocialItemProps {
    name: IconTypes;
    url: string;
}
