import { TextVariants } from './text.type';
export interface TextProps {
    variant: TextVariants;
    className?: string;
    children: React.ReactNode;
}
