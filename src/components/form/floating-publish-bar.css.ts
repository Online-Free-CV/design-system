import { tokens } from "@styles/theme.css";
import { style, keyframes } from "@vanilla-extract/css";

const slideDown = keyframes({
  "0%": {
    transform: "translateY(-20px)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const slideUp = keyframes({
  "0%": {
    transform: "translateY(0)",
    opacity: 1,
  },
  "100%": {
    transform: "translateY(-20px)",
    opacity: 0,
  },
});

const blink = keyframes({
  "0%": {
    opacity: 0,
  },
  "50%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

export const floatingBar = style({
  background: "white",
  boxShadow: tokens.shadows.md,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1000,
  animation: `${slideDown} 0.5s cubic-bezier(0.4, 0, 0.2, 1)`,
  padding: 10,
  position: "sticky",
  top: 0,
});

export const floatingBarExit = style({
  animation: `${slideUp} 0.5s cubic-bezier(0.4, 0, 0.2, 1)`,
});

export const publishButton = style({
  background: "linear-gradient(to bottom, #FFA500, #FF0000)",
  padding: 10,
  borderRadius: tokens.radii.md,
  border: "none",
  cursor: "pointer",
  color: tokens.colors.white,
  fontSize: tokens.fontWeight.bold,
  minWidth: 150,
  display: "flex",
  justifyContent: "center",
});

export const dotAnimation = style({
  display: "inline-flex",
  animation: `${blink} 1.5s infinite`,
});

export const logoStyle = style({
  width: 40,
  height: 40,
  borderRadius: tokens.radii.full,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});