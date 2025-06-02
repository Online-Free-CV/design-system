import { default as React } from 'react';
interface BlockSkillBarProps {
    name: string;
    barColor?: string;
    level: number;
    years: number;
    totalBlocks?: number;
    onDelete?: () => void;
}
export declare const BlockSkillBar: React.FC<BlockSkillBarProps>;
export {};
