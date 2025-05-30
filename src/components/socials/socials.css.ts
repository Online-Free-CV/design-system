import { tokens } from "@styles/theme.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const socialsStyle = style({
  display: "flex",
  gap: tokens.spacing.sm,
  justifyContent: "center",
  alignItems: "center",
});

export const socialItemStyle = style({
  border: 0,
  width: "40px",
  height: "40px",
  borderRadius: tokens.radii.xs,
  backgroundColor: tokens.colors.blueGray,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const transparentSocialItemStyle = style([
  socialItemStyle,
  {
    backgroundColor: "transparent",
  },
]);

globalStyle(`${socialItemStyle} > svg`, {
  height: "20px",
  width: "20px",
});

globalStyle(`${transparentSocialItemStyle} > svg`, {
  height: "20px",
  width: "20px",
});

export const accordionStyle = style({
  width: "100%",
  marginTop: tokens.spacing.md,
  padding: tokens.spacing.md,
  borderRadius: tokens.radii.sm,
  backgroundColor: tokens.colors.white,
});

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing.md,
  padding: `${tokens.spacing.none} ${tokens.spacing.lg}`,
});

export const formGroupStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing.sm,
});

// Add new styles for the social form
globalStyle(".social-input-container", {
  display: "flex",
  alignItems: "center",
  border: `1px solid ${tokens.colors.lightGray}`,
  borderRadius: tokens.radii.xs,
  overflow: "hidden",
});

globalStyle(".social-icon-container", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: tokens.colors.lightGray,
  padding: "0 10px",
  height: "40px",
  width: "40px",
});

globalStyle(".social-select", {
  flex: 1,
  border: "none",
  padding: tokens.spacing.sm,
  outline: "none",
});

globalStyle(".url-input", {
  padding: tokens.spacing.sm,
  borderRadius: tokens.radii.xs,
  border: `1px solid ${tokens.colors.lightGray}`,
});

export const formActionsStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: tokens.spacing.sm,
});

export const formLabelStyle = style({
  fontWeight: "bold",
  fontSize: tokens.fontSize.sm,
});

export const formInputStyle = style({
  padding: tokens.spacing.lg,
  borderRadius: tokens.radii.xs,
  border: `1px solid ${tokens.colors.lightGray}`,
});

export const formErrorStyle = style({
  color: tokens.colors.fireEngineRed,
  fontSize: tokens.fontSize.xs,
  marginTop: tokens.spacing.xs,
});

export const socialIconsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing.sm,
  width: "100%",
});

export const socialInputRow = style({
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing.sm,
  borderRadius: tokens.radii.xs,
});

export const socialIcon = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20px",
  height: "20px",
  flexShrink: 0,
});

export const urlInput = style({
  display: "flex",
  flex: 1,
  padding: tokens.spacing.sm,
  outline: "none",
  minWidth: 0,
  border: 0,

});

globalStyle(`${urlInput} > span`, {
  minHeight: "20px",
  width: "100%",
});
