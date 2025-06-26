import { default as React } from 'react';
import { ExperienceItem } from './experience.interface';
interface SimpleListSectionProps {
    items: ExperienceItem[];
    itemDisplayDirection?: 'row' | 'column';
    themeColor?: {
        gradient: string;
        base: string;
    };
}
export declare const SimpleListSection: React.FC<SimpleListSectionProps>;
export {};
