import { globalStyle, style, keyframes } from "@vanilla-extract/css";

export const blockSkillBar = style({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#fff",
});

export const blockDeleteIcon = style({
  position: "absolute",
  top: "2px",
  right: "-3px",
  fontSize: "18px",
  color: "red",
  cursor: "pointer",
  display: "none",
});

export const barBlock = style({
  display: "grid",
  gridTemplateColumns: `repeat(30, 1fr)`,
  gap: "1px",
  fontSize: "12px",
  fontFamily: "monospace",
  marginBottom: "4px",
  color: "#59c15d",
});

globalStyle(`${blockSkillBar}:hover ${blockDeleteIcon}`, {
  display: "block",
});

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(5px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const blockSpan = style({
  animationName: fadeIn,
  animationDuration: "0.3s",
  animationTimingFunction: "ease-out",
  animationFillMode: "forwards",
  opacity: 0, // ensures initial state is hidden
});
