import { default as React } from 'react';
interface Skill {
    name: string;
    level: number;
    years: number;
}
interface SkillBarsGridProps {
    skills: Skill[];
    barColor?: string;
    onDelete?: (index: number) => void;
}
export declare const SkillBarsGrid: React.FC<SkillBarsGridProps>;
export {};
