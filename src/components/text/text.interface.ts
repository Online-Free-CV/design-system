import { TextVariants } from "./text.type";

export interface ITextProps {
  variant: TextVariants;
  className?: string;
  children?: React.ReactNode;
}
