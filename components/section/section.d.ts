import * as React from "react";
interface SectionProps {
    title?: string;
    titleFontStyle?: string;
    children: React.ReactNode;
    className?: string;
    rightContent?: React.ReactNode;
}
export declare const Section: React.FC<SectionProps>;
export {};
