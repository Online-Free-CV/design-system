import { IconTypes } from './socials.type';
export interface SocialsProps {
    fieldName: string;
}
export interface SocialsDisplayProps {
    socialProfiles: SocialItemProps[];
}
export interface SocialItemProps {
    name: IconTypes;
    url: string;
}
