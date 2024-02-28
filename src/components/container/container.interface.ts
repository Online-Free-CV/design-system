import { ContainerVariants } from "./container.type";

export interface ContainerProps {
  variant: ContainerVariants;
  className?: string;
  children: React.ReactNode;
}
