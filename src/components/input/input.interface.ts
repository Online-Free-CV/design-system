import { InputTypes } from "./input.type";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  className?: string;
  children: React.ReactNode;
}
