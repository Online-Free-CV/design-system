import { style, keyframes } from "@vanilla-extract/css";
import { tokens } from "@styles/theme.css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinner = style({
  border: `16px solid ${tokens.colors.lightGray}`,
  borderTop: `16px solid ${tokens.colors.primary}`,
  borderRadius: "50%",
  width: "120px",
  height: "120px",
  animation: `${spin} 1s linear infinite`,
});
