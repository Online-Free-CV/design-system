import { style } from "@vanilla-extract/css";

export const iconButton = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "80px",
  height: "80px",
  background: "#f2f5f9",
  color: "#5f5f5f",
  border: "none",
  borderRadius: "16px",
  cursor: "pointer",
  transition: "background 0.3s",
  ":active": {
    background: "linear-gradient(to bottom, #FFA500, #FF0000)",
    color: "#FFFFFF",
  },
  ":hover": {
    background: "linear-gradient(to bottom, #FFA500, #FF0000)",
    color: "#FFFFFF",
  },
});

export const iconButtonSpan = style({
  marginTop: "3px",
});
