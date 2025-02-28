export interface ContainerProps {
  variant?: "wrapper" | "flexWrap" | "row" | "column";
  direction?: "ltr" | "rtl";
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end" | "stretch";
  size?: "full" | "half" | "auto"; // NEW: Defines child size relative to parent
  gap?: "none" | "small" | "medium" | "large"; // NEW: Defines gap between children
  children: React.ReactNode;
  className?: string;
}
