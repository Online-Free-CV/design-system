import { ButtonProps } from "./button.interface";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type={type}
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        className,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
      {label}
    </button>
  );
};
