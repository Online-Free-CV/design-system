import { tokens } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const section = style({
  borderRadius: tokens.spacing.sm,
  marginBottom: tokens.spacing.lg,
});

export const sectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: tokens.spacing.md,
});

export const sectionTitle = style({
  fontSize: tokens.fontSize.lg,
  fontWeight: "bold",
});

export const addButton = style({
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  borderRadius: tokens.spacing.sm,
  cursor: "pointer",
});

export const itemBox = style({
  border: "1px solid #e1e1e1",
  padding: tokens.spacing.md,
  borderRadius: tokens.spacing.sm,
  marginBottom: tokens.spacing.lg,
});

export const formGroup = styleVariants({
  error: {
    position: "relative",
    "::after": {
      content: "attr(data-placeholder)",
      position: "absolute",
      top: "20px",
      left: tokens.spacing.sm,
      fontSize: "12px",
      color: "red",
      background: "#f8dddd",
      padding: `0px 2px`,
      borderRadius: tokens.spacing.xs,
      fontWeight: 500,
      fontFamily: "'Raleway', sans-serif",
      textTransform: "capitalize",
    },
  },
});

export const fieldLabel = style({
  display: "block",
  marginBottom: tokens.spacing.sm,
  fontWeight: 500,
});

export const input = style({
  width: "100%",
  padding: tokens.spacing.sm,
  fontSize: tokens.fontSize.md,
  borderRadius: tokens.spacing.sm,
  border: "1px solid #ccc",
  marginBottom: tokens.spacing.md,
  boxSizing: "border-box",
  position: "relative",
});

export const smallInput = style([
  input,
  {
    width: "180px",
  },
]);

export const textarea = style([
  input,
  {
    height: `${tokens.spacing.lg} * 4`,
    resize: "vertical",
  },
]);

export const saveButton = style({
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  borderRadius: tokens.spacing.sm,
  cursor: "pointer",
  fontWeight: 600,
  transition: "background-color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: "#218838",
    },
  },
});

export const editButton = style({
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  borderRadius: tokens.spacing.sm,
  cursor: "pointer",
  fontWeight: 600,
  transition: "background-color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: "#0069d9",
    },
  },
});
