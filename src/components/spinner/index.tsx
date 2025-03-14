import React from "react";
import { spinner } from "./spinner.css";
import { SpinnerProps } from "./spinner.interface";
import { tokens } from "@styles/theme.css";

const Spinner: React.FC<SpinnerProps> = ({ size = "medium", color }) => {
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

export default Spinner;
