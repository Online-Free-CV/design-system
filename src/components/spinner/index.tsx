import { tokens } from "@styles/theme.css";
import { spinner } from "./spinner.css";
import { SpinnerProps } from "./spinner.interface";
export const Spinner = ({ size = "medium", color }: SpinnerProps) => {
  const sizeStyle = {
    small: { width: "20px", height: "20px", borderWidth: "4px" },
    medium: { width: "40px", height: "40px", borderWidth: "6px" },
    large: { width: "60px", height: "60px", borderWidth: "8px" },
  }[size];

  return (
    <div
      className={spinner}
      style={{
        ...sizeStyle,
        borderTopColor: color || tokens.colors.orange,
      }}
    ></div>
  );
};
