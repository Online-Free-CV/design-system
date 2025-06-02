import { tokens } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const dynamicSkillsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginTop: "24px",
});

export const inputRow = style({
  display: "flex",
  alignItems: "flex-end",
  gap: "12px",
 "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "stretch", 
    },
  },

});

export const input = style({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
  flex: 1,
});

export const addButton = style({
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: `${tokens.spacing.sm}`,
    paddingLeft: tokens.spacing.md,
    borderRadius: tokens.spacing.sm,
    cursor: "pointer",
    position: "relative",
    ":before": {
      content: "+",
      position: "absolute",
      left: tokens.spacing.sm,
    },
});

export const inputFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const label = style({
  marginBottom: "4px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#333",
});
