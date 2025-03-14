import { tokens } from "@styles/theme.css";
import { spinner } from "./spinner.css";
import { SpinnerProps } from "./spinner.interface";
export const Spinner = ({ size = "medium", color }: SpinnerProps) => {
  const sizeStyle = {
    small: { width: "10px", height: "10px", borderWidth: "2px" },
    medium: { width: "20px", height: "20px", borderWidth: "4px" },
    large: { width: "30px", height: "30px", borderWidth: "6px" },
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
