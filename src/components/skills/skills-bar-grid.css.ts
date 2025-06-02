import { style } from "@vanilla-extract/css";
export const skillGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  columnGap: "20px",
  rowGap: "10px",

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)", // Change to 1 column on mobile
    },
  },
});

export const toggleButton = style({
  marginTop: "16px",
  padding: "8px 12px",
  fontSize: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  backgroundColor: "#f9f9f9",
  cursor: "pointer",
  alignSelf: "flex-start",
  selectors: {
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
});