import { tokens } from "@styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const experienceList = recipe({
  base: {
    padding: tokens.spacing.none,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacing.md,
  },
  variants: {
    layout: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
  },
});

export const experienceItem = style({
  display: "flex",
  gap: tokens.size.md,
  padding: tokens.size.md,
  border: "1px solid #f4f5fc",
  borderRadius: "0.75rem",
  backgroundColor: "#fff",
});

export const logo = style({
  width: tokens.size.xxl,
  height: tokens.size.xxl,
  objectFit: "contain",
  borderRadius: tokens.size.sm,
  background: "#f9fafb",
});

export const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing.xs,
});

export const titleRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  fontSize: tokens.fontSize.lg,
  fontWeight: 600,
  margin: tokens.spacing.none,
});

export const dateRange = style({
  fontSize: tokens.fontSize.sm,
  color: "#6b7280",
});

export const subtitle = style({
  fontSize: "0.9rem",
  color: "#4b5563",
});

export const location = style({
  fontSize: tokens.fontSize.sm,
  fontStyle: "italic",
  color: "#6b7280",
});

export const description = style({
  fontSize: "0.9rem",
  color: "#374151",
  marginTop: tokens.spacing.xs,
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: tokens.spacing.sm,
  marginTop: tokens.spacing.sm,
});

export const tag = style({
  fontSize: tokens.fontSize.xxs,
  padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
  backgroundColor: "#e0f2fe",
  color: "#0284c7",
  borderRadius: "9999px",
});

export const paragraph = style({
  fontSize: tokens.fontSize.sm,
  margin: tokens.spacing.none,
});

export const editButton = style({
  background: "none",
  border: "none",
  color: "#666",
  fontSize: "1rem",
  cursor: "pointer",
  padding: "4px",
  lineHeight: 1,
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  borderRadius: tokens.radii.sm,

  selectors: {
    "&:hover": {
      color: "#000",
    },
    "&:focus": {
      outline: "2px solid #0070f3",
      outlineOffset: "2px",
    },
  },
});

export const flexCol = style({
  flexDirection: "column",
});

export const flexRow = style({
  flexDirection: "row",
});

export const simpleListItem = style({
  marginBottom: "1rem",
  position: "relative",
});

export const simpleRowListItem = style({
  border: "1px solid gainsboro",
  padding: "5px",
  borderRadius: "10px",
})

export const blockDeleteIcon = style({
  position: "absolute",
  top: "-13px",
  right: "-7px",
  fontSize: "18px",
  color: "red",
  cursor: "pointer",
  display: "none",
});

globalStyle(`${simpleListItem}:hover ${blockDeleteIcon}`, {
  display: "block",
});
