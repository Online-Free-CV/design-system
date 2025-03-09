export interface ContainerProps {
    variant?: "wrapper" | "flexWrap" | "row" | "column";
    direction?: "ltr" | "rtl";
    justify?: "start" | "center" | "end" | "between" | "around";
    align?: "start" | "center" | "end" | "stretch";
    size?: "full" | "half" | "auto";
    gap?: "none" | "small" | "medium" | "large";
    reverse?: "row" | "column";
    children: React.ReactNode;
    className?: string;
}
